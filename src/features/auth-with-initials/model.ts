import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import { atomWithValidate } from 'jotai-form';
import { SyncState } from 'jotai-form/dist/src/atomWithValidate';
import { z } from 'zod';

import { analystConfig, analystModel } from 'entities/analyst';

/** Schema used for validating form input. */
const initialsSchema = z
    .string()
    .min(analystConfig.minChars)
    .max(analystConfig.maxChars)
    .trim();

/** Data store for initials form content. */
const initialsAtom = atomWithValidate('', {
    validate: (value) => {
        const isValid = initialsSchema.parse(value);
        if (!isValid) {
            // FIXME probably shouldn't be an empty string here
            throw new Error('');
        }
        return value;
    },
});

/**
 * Get current field state and a store change handler.
 **/
export function useInitialsField(): [
    SyncState<string>,
    (event: ChangeEvent<HTMLInputElement>) => void
] {
    const [initials, setInitials] = useAtom(initialsAtom);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setInitials(event.target.value);

    return [initials, handleChange];
}

export function useActionHandler(): [SyncState<string>, () => void] {
    const [initials] = useInitialsField();
    const auth = analystModel.useAuth();

    const handleAction = () => {
        auth.signIn(initials.value);
    };

    return [initials, handleAction];
}
