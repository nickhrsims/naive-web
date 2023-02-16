import PropTypes from 'prop-types';
import { Input as ChakraInput } from '@chakra-ui/react';

import * as model from '../model';

interface Props {}

export default function Input(props: Props) {
    const [initials, handleChange] = model.useInitialsField();

    const isInvalid = initials.isDirty && !initials.isValid;

    return (
        <ChakraInput
            value={initials.value}
            onChange={handleChange}
            isInvalid={isInvalid}
            errorBorderColor="red.300"
        />
    );
}

Input.propTypes = {
    /** Label of button. */
    children: PropTypes.node,
};

Input.defaultProps = {
    children: 'ENTER',
};
