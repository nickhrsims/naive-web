import { ReactNode } from 'react';

import { Flex, Icon, FlexProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface NavItemProps extends FlexProps {
    to: string;
    icon: IconType;
    children: ReactNode;
}

export const NavItem = ({ to, icon, children, ...rest }: NavItemProps) => {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Flex
                align="center"
                p="2"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'gray.700',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
