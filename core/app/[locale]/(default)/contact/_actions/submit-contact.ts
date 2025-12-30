'use server';

import { z } from 'zod';

import { client } from '~/client';
import { graphql } from '~/client/graphql';

const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const SubmitContactUsMutation = graphql(`
  mutation SubmitContactUs($input: SubmitContactUsInput!) {
    submitContactUs(input: $input) {
      __typename
      errors {
        __typename
        ... on Error {
          message
        }
      }
    }
  }
`);

const GetContactPageQuery = graphql(`
  query GetContactPage {
    site {
      content {
        pages(filters: { pageType: CONTACT }) {
          edges {
            node {
              entityId
              name
            }
          }
        }
      }
    }
  }
`);

export interface ContactFormState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    company?: string[];
    subject?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const validatedFields = ContactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Get the contact page entity ID from BigCommerce
    const pagesResponse = await client.fetch({
      document: GetContactPageQuery,
      fetchOptions: { cache: 'no-store' },
    });

    const contactPages = pagesResponse.data.site.content.pages.edges;

    if (!contactPages || contactPages.length === 0 || !contactPages[0]?.node) {
      // eslint-disable-next-line no-console
      console.error('No contact page found in BigCommerce');

      return {
        success: false,
        message: 'Contact form is not configured. Please email us directly at epha@gtsegroup.com',
      };
    }

    const pageEntityId = contactPages[0].node.entityId;

    // Build message with subject and company info
    const { name, email, phone, company, subject, message } = validatedFields.data;
    const fullMessage = `Subject: ${subject}
Company: ${company || 'Not provided'}

${message}`.trim();

    // Submit to BigCommerce
    const response = await client.fetch({
      document: SubmitContactUsMutation,
      variables: {
        input: {
          pageEntityId,
          data: {
            fullName: name,
            email,
            phoneNumber: phone || undefined,
            comments: fullMessage,
          },
        },
      },
      fetchOptions: { cache: 'no-store' },
    });

    const result = response.data.submitContactUs;

    if (result.errors.length > 0) {
      // eslint-disable-next-line no-console
      console.error('BigCommerce errors:', result.errors);

      return {
        success: false,
        message: result.errors.map((e: { message: string }) => e.message).join(', '),
      };
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Contact form error:', error);

    return {
      success: false,
      message:
        'Something went wrong. Please try again or contact us directly at epha@gtsegroup.com',
    };
  }
}
