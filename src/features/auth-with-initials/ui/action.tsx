import { ComponentProps } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

import * as model from '../model';

interface Props extends ComponentProps<typeof Button> {}

export default function Action(props: Props) {
    const [initials, handleAction] = model.useActionHandler();

    return <Button {...props} isDisabled={!initials.isValid} onClick={handleAction} />;
}

Action.propTypes = {
    /** Label of button. */
    children: PropTypes.node,
};

Action.defaultProps = {
    children: 'Sign In',
};
