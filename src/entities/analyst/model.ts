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
    initials: NaiveAnalystInitials;

    constructor(initials: string) {
        this.initials = new NaiveAnalystInitials(initials);
    }
}

// --- State Atoms

const analystAtom = atom<NaiveAnalyst | null>(null);

// --- Hooks

/** User state access */
const useAnalyst = () => useAtom(analystAtom);

/** Initials data access */
export const useInitials = () => {
    const [analyst] = useAnalyst();

    if (!analyst) {
        return '';
    }

    return analyst.initials.value;
};

// --- Auth API

/**
 * Auth Context hook. Supports only a single context.
 *
 * Multi-context support may be expanded by passing a unique
 * symbol to key-map the analyst atom.
 **/
export const useAuth = (): AuthContext => {
    const [analyst, setAnalyst] = useAnalyst();

    /**
     * Sign in user, only data required are initials.
     *
     * @param {string} initials - Initials of the analyst.
     * @returns {void}
     **/
    const signIn = (initials: string): void => {
        const analyst = new NaiveAnalyst(initials);
        setAnalyst(analyst);
    };

    /**
     * Sign out user.
     *
     * @return {void}
     **/
    const signOut = (): void => {
        setAnalyst(null);
    };

    /**
     * Check if an analyst has already logged in.
     * @returns {boolean}
     **/
    const isAuthenticated = (): boolean => {
        return !!analyst;
    };

    /** Populated auth context, fresh reference identity each update. */
    const authContext = {
        analyst,
        signIn,
        signOut,
        isAuthenticated,
    };

    return authContext;
};
