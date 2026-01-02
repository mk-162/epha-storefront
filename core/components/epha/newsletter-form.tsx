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

  return (
    <div className="space-y-3">
      <form {...getFormProps(form)} action={formAction} className="flex gap-2">
        <div className="relative flex-1">
          <input
            {...getInputProps(fields.email, { type: 'email' })}
            className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
            placeholder="Email Address"
          />
        </div>
        <button
          className="flex min-w-[60px] items-center justify-center rounded bg-accent px-4 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
          disabled={isPending}
          type="submit"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Go'}
        </button>
      </form>

      {state.successMessage != null && state.successMessage !== '' ? (
        <p className="animate-fade-in text-xs font-medium text-green-400">{state.successMessage}</p>
      ) : null}

      {fields.email.errors?.map((error) => (
        <p className="text-xs font-medium text-red-400" key={error}>
          {error}
        </p>
      ))}

      {form.errors?.map((error) => (
        <p className="text-xs font-medium text-red-400" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
