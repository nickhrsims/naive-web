import { ReactElement } from 'react';
import { ChakraProvider } from './chakra';
import { BrowserRouter } from 'react-router-dom';

interface Props {
    children: ReactElement | ReactElement[];
}

export default function Providers(props: Props) {
    const { children } = props;
    return (
        <ChakraProvider>
            <BrowserRouter>{children}</BrowserRouter>
        </ChakraProvider>
    );
}
