import _ from 'lodash';
import delay from 'delay';
import React, { Component, PropTypes } from 'react';
import i18n from '../../../lib/i18n';
import store from '../../../store';
import { show as showSettings } from './Settings';

class Webcam extends Component {
    static propTypes = {
        disabled: PropTypes.bool.isRequired
    };
    state = {
        url: store.get('widgets.webcam.url')
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
    }
    edit() {
        showSettings(() => {
            this.setState({
                url: store.get('widgets.webcam.url')
            });
        });
    }
    refresh() {
        this.refs['webcam-viewport'].src = '';

        delay(10) // delay 10ms
            .then(() => {
                this.refs['webcam-viewport'].src = this.state.url;
            });
    }
    render() {
        const { disabled } = this.props;
        const { url } = this.state;

        return (
            <div>
            {!disabled &&
                <div className="webcam-on-container">
                    <img
                        src={url}
                        className="webcam-viewport"
                        ref="webcam-viewport"
                        alt=""
                    />
                </div>
            }
            {disabled &&
                <div className="webcam-off-container">
                    <h4><i className="icon-webcam"></i></h4>
                    <h5>{i18n._('Webcam is off')}</h5>
                </div>
            }
            </div>
        );
    }
}

export default Webcam;
