'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

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

  // In a real application, you would send an email or save to a database here
  // For now, we'll just simulate a successful submission

  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the submission (in production, send email via SendGrid, etc.)
    console.log('Contact form submission:', validatedFields.data);

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
    };
  } catch {
    return {
      success: false,
      message:
        'Something went wrong. Please try again or contact us directly at epha@gtsegroup.com',
    };
  }
}
