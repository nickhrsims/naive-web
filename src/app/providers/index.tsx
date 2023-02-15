import { ReactElement } from 'react';
import { ChakraProvider } from './chakra';

interface Props {
    children: ReactElement;
}

export default function Providers(props: Props) {
    const { children } = props;
    return <ChakraProvider>{children}</ChakraProvider>;
}
