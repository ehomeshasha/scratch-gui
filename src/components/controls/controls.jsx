import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import GreenFlag from '../green-flag/green-flag.jsx';
import StopAll from '../stop-all/stop-all.jsx';
import TurboMode from '../turbo-mode/turbo-mode.jsx';
import JobStart from '../job-start/job-start.jsx';

import styles from './controls.css';

const Controls = function (props) {
    const {
        active,
        className,
        onJobStartClick,
        onGreenFlagClick,
        onStopAllClick,
        turbo,
        ...componentProps
    } = props;
    return (
        <div
            className={classNames(styles.controlsContainer, className)}
            {...componentProps}
        >
            <JobStart
                active={active}
                onClick={onJobStartClick}
            />
            <GreenFlag
                active={active}
                onClick={onGreenFlagClick}
            />
            <StopAll
                active={active}
                onClick={onStopAllClick}
            />
            {turbo ? (
                <TurboMode />
            ) : null}
        </div>
    );
};

Controls.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onJobStartClick: PropTypes.func.isRequired,
    onGreenFlagClick: PropTypes.func.isRequired,
    onStopAllClick: PropTypes.func.isRequired,
    turbo: PropTypes.bool
};

Controls.defaultProps = {
    active: false,
    turbo: false
};

export default Controls;
