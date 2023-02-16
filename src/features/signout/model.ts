import { analystModel } from 'entities/analyst';

export function useActionHandler(): () => void {
    const auth = analystModel.useAuth();

    const handleAction = () => {
        auth.signOut();
    };

    return handleAction;
}
