'use client';

import { getFormProps, getInputProps, SubmissionResult, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Loader2 } from 'lucide-react';
import { useActionState } from 'react';

import { schema } from '@/vibes/soul/primitives/inline-email-form/schema';
import { subscribe } from '~/components/subscribe/_actions/subscribe';

interface State {
  lastResult: SubmissionResult | null;
  successMessage?: string;
}

const initialState: State = { lastResult: null };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribe, initialState);
  const [form, fields] = useForm({
    lastResult: state.lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const allErrors = [...(fields.email.errors ?? []), ...(form.errors ?? [])];

  if (state.successMessage) {
    return (
      <div className="flex flex-col items-start gap-2 rounded border border-accent/20 bg-accent/5 p-4 animate-fade-in">
        <p className="text-sm font-bold text-accent uppercase tracking-wider">Success!</p>
        <p className="text-xs text-gray-400">{state.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <form {...getFormProps(form)} action={formAction} className="flex gap-2">
        <div className="relative flex-1">
          <input
            {...getInputProps(fields.email, { type: 'email' })}
            aria-describedby={allErrors.length > 0 ? 'newsletter-errors' : undefined}
            aria-invalid={allErrors.length > 0 ? true : undefined}
            aria-label="Email address"
            className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none transition-colors"
            placeholder="Email Address"
          />
        </div>
        <button
          className="flex min-w-[60px] items-center justify-center rounded bg-accent px-4 py-2 text-sm font-bold uppercase text-white transition-all hover:bg-accent/90 disabled:opacity-50 active:scale-95"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Go'}
        </button>
      </form>

      {allErrors.length > 0 ? (
        <div id="newsletter-errors">
          {allErrors.map((error) => (
            <p className="text-xs font-medium text-red-400" key={error}>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
