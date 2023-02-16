import { KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Input as ChakraInput } from '@chakra-ui/react';

import { analystConfig } from 'entities/analyst';
import * as model from '../model';

interface Props {}

export default function Input(props: Props) {
    const [initials, handleChange] = model.useInitialsField();
    const handleAction = model.useActionHandler();

    const isInvalid = initials.isDirty && !initials.isValid;
    const tooltip = `Initials must be between ${analystConfig.minChars} and ${analystConfig.maxChars} characters`;

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key == 'Enter') {
            handleAction();
        }
    };

    return (
        <Tooltip label={tooltip}>
            <ChakraInput
                onKeyUp={handleKeyPress}
                value={initials.value}
                onChange={handleChange}
                isInvalid={isInvalid}
                errorBorderColor="red.300"
            />
        </Tooltip>
    );
}

Input.propTypes = {
    /** Label of button. */
    children: PropTypes.node,
};

Input.defaultProps = {
    children: 'ENTER',
};
