import { atom, useAtom } from 'jotai';

import * as config from './config';

// --- Types

interface AuthContext {
    analyst: NaiveAnalyst | null;
    isAuthenticated: () => boolean;
    signIn: (initials: string) => void;
    signOut: () => void;
}

/**
 * Domain primitive over an analysts initials.
 *
 * @param {string} initials - Initials of analyst.
 * */
class NaiveAnalystInitials {
    private data: string;

    // FIXME
    // All validation should be pushed through the zod pipeline
    constructor(initials: string) {
        // Validity Predicates
        const areInitialsDefined = initials !== undefined && initials !== null;
        const areInitialsLongEnough = initials.length >= config.minChars;
        const areInitialsShortEnough = initials.length <= config.maxChars;

        // Composite Validity Predicates
        const areInitialsValid =
            areInitialsDefined && areInitialsLongEnough && areInitialsShortEnough;

        if (!areInitialsValid) {
            throw new Error('Initials are invalid');
        }

        this.data = initials;
    }

    get value(): string {
        return this.data;
    }
}

// TODO Domain primitives over initials
class NaiveAnalyst {
    // FIXME
    private initials: NaiveAnalystInitials;

    constructor(initials: string) {
        this.initials = new NaiveAnalystInitials(initials);
    }
}

// --- State Atoms

const analystAtom = atom<NaiveAnalyst | null>(null);

// --- Hooks

/** User state access */
export const useAnalyst = () => useAtom(analystAtom);

/** Auth state access */
export const useAuth = () => !!useAnalyst();

// --- Auth API

/**
 * Log in user, only data required are initials.
 *
 * @param {string} initials - Initials of the analyst.
 * @returns {void}
 **/
export const loginAnalyst = (initials: string): void => {
    const [, setAnalyst] = useAnalyst();
    const analyst = new NaiveAnalyst(initials);
    setAnalyst(analyst);
};

/**
 * Log out user.
 *
 * @return {void}
 **/
export const logoutAnalyst = (): void => {
    const [, setAnalyst] = useAnalyst();
    setAnalyst(null);
};
