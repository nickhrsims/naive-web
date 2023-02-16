import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Text,
    BoxProps,
} from '@chakra-ui/react';

import { NavItem } from './NavItem';
import { LinkConfig } from '../navigation';

interface NavProps extends BoxProps {
    title: string;
    links: Record<string, LinkConfig>;
    onClose: () => void;
}

export const Nav = ({ title, links, onClose, ...rest }: NavProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    {title}
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {Object.values(links).map(({ label, path, icon }) => (
                <NavItem to={path} key={label} icon={icon}>
                    {label}
                </NavItem>
            ))}
        </Box>
    );
};
