import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import styles from './code-editor.css';

const CodeEditorComponent = props => {
    const {
        options,
        vm,
        ...componentProps
    } = props;
    return (
        <Box
            className={styles.blocks}
            // componentRef={componentRef}
            {...componentProps}
        />
    );
};
// CodeEditorComponent.propTypes = {
//     componentRef: PropTypes.func
// };

export default CodeEditorComponent;
