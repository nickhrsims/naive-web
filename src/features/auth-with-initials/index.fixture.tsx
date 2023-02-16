import { Heading, Stack } from '@chakra-ui/react';
import Input from './ui/input';
import Action from './ui/action';
import { analystModel } from 'entities/analyst';

export default function Fixture() {
    const auth = analystModel.useAuth();
    const status = auth.isAuthenticated() ? 'Signed In' : 'Not Signed In';

    return (
        <Stack>
            <Input />
            <Action />
            <Heading>{status}</Heading>
        </Stack>
    );
}
