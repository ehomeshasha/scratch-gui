import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import analytics from '../lib/analytics';
import ControlsComponent from '../components/controls/controls.jsx';
import PubSub from 'pubsub-js';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleJobStartClick',
            'handleGreenFlagClick',
            'handleStopAllClick',
            'onProjectRunStart',
            'onProjectRunStop'
        ]);
        this.state = {
            projectRunning: false,
            turbo: false
        };
    }
    componentDidMount () {
        this.props.vm.addListener('PROJECT_RUN_START', this.onProjectRunStart);
        this.props.vm.addListener('PROJECT_RUN_STOP', this.onProjectRunStop);
    }
    componentWillUnmount () {
        this.props.vm.removeListener('PROJECT_RUN_START', this.onProjectRunStart);
        this.props.vm.removeListener('PROJECT_RUN_STOP', this.onProjectRunStop);
    }
    onProjectRunStart () {
        this.setState({projectRunning: true});
    }
    onProjectRunStop () {
        this.setState({projectRunning: false});
    }
    handleGreenFlagClick (e) {
        e.preventDefault();
        if (e.shiftKey) {
            this.setState({turbo: !this.state.turbo});
            this.props.vm.setTurboMode(!this.state.turbo);
        } else {
            alert("greenFlag");
            this.props.vm.greenFlag();
            analytics.event({
                category: 'general',
                action: 'Green Flag'
            });
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        this.props.vm.stopAll();
        analytics.event({
            category: 'general',
            action: 'Stop Button'
        });
    }


    handleJobStartClick (e) {
        e.preventDefault();
        alert("job_start event publist");
        PubSub.publish('job_start');


        // this.emit(Runtime.SCRIPT_GLOW_ON, {id: topBlockId});
        // this.props.vm.runtime.glowScript(, true);
        // this.props.vm.runtime._step();
        // console.log(this.props.vm);
        // console.log(this.props.vm.runtime);
        // console.log(this.props.vm.runtime.threads);

        // this.props.vm.runtime.glowScript(topBlockId, true);
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;
        return (
            <ControlsComponent
                {...props}
                active={this.state.projectRunning}
                turbo={this.state.turbo}
                onJobStartClick={this.handleJobStartClick}
                onGreenFlagClick={this.handleGreenFlagClick}
                onStopAllClick={this.handleStopAllClick}
            />
        );
    }
}

Controls.propTypes = {
    vm: PropTypes.instanceOf(VM)
};

export default Controls;
