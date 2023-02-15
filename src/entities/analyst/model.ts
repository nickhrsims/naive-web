import { atom, useAtom } from 'jotai';

// --- Types

class NaiveAnalyst {
    private initials: string;

    constructor(initials: string) {
        this.initials = initials;
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
