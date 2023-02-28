import { ComponentProps, PropsWithChildren } from 'react';
import { Center, Flex } from '@chakra-ui/react';

interface Props extends PropsWithChildren {
    FlexProps?: ComponentProps<typeof Flex>;
    CenterProps?: ComponentProps<typeof Center>;
}

export default function Page(props: Props) {
    const { children, FlexProps, CenterProps } = props;
    return (
        <Flex
            width="100vw"
            height="100vh"
            alignContent="center"
            justifyContent="center"
            {...FlexProps}
        >
            <Center {...CenterProps}>
                {children}
            </Center>
        </Flex>
    );
}

Page.defaultProps = {
    FlexProps: {},
    CenterProps: {},
}
