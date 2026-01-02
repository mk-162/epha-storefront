'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { subscribe } from '~/components/subscribe/_actions/subscribe';
import { Loader2 } from 'lucide-react';

const initialState = {
    lastResult: null,
    successMessage: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="rounded bg-accent px-4 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-accent/90 disabled:opacity-50 flex items-center justify-center min-w-[60px]"
        >
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Go'}
        </button>
    );
}

export function NewsletterForm() {
    const [state, formAction] = useFormState(subscribe, initialState);

    return (
        <div className="space-y-3">
            <form action={formAction} className="flex gap-2">
                <div className="relative flex-1">
                    <input
                        autoComplete="email"
                        className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        type="email"
                    />
                </div>
                <SubmitButton />
            </form>

            {state.successMessage && (
                <p className="text-xs text-green-400 font-medium animate-fade-in">
                    {state.successMessage}
                </p>
            )}

            {state.lastResult?.errors && (
                <div className="text-xs text-red-400 font-medium space-y-1">
                    {Object.entries(state.lastResult.errors).map(([key, errors]) => (
                        <p key={key}>{Array.isArray(errors) ? errors[0] : errors}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
