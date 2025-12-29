'use client';

import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useActionState } from 'react';

import { ContactFormState, submitContactForm } from '../_actions/submit-contact';

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 font-heading text-2xl uppercase text-primary">Message Sent!</h3>
        <p className="text-gray-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && state.success === false ? (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
            id="name"
            name="name"
            placeholder="John Smith"
            required
            type="text"
          />
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
            id="email"
            name="email"
            placeholder="john@company.com"
            required
            type="email"
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
            id="phone"
            name="phone"
            placeholder="(555) 123-4567"
            type="tel"
          />
          {state.errors?.phone && (
            <p className="mt-1 text-sm text-red-500">{state.errors.phone[0]}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="company">
            Company Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
            id="company"
            name="company"
            placeholder="Your Company"
            type="text"
          />
          {state.errors?.company && (
            <p className="mt-1 text-sm text-red-500">{state.errors.company[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="subject">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
          id="subject"
          name="subject"
          required
        >
          <option value="">Select a subject...</option>
          <option value="product-inquiry">Product Inquiry</option>
          <option value="bulk-order">Bulk Order Quote</option>
          <option value="distribution">Distribution Partnership</option>
          <option value="technical">Technical Support</option>
          <option value="returns">Returns & Refunds</option>
          <option value="other">Other</option>
        </select>
        {state.errors?.subject && (
          <p className="mt-1 text-sm text-red-500">{state.errors.subject[0]}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-accent focus:ring-2 focus:ring-accent"
          id="message"
          name="message"
          placeholder="Tell us how we can help..."
          required
          rows={5}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
        )}
      </div>

      <button
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-heading uppercase text-white transition-colors hover:bg-accent/90 disabled:bg-accent/50 md:w-auto"
        disabled={isPending}
        type="submit"
      >
        {isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
