import { isEqual } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import i18n from '../../../lib/i18n';
import controller from '../../../lib/controller';
import {
    ACTIVE_STATE_IDLE,
    METRIC_UNIT
} from './constants';

class DisplayPanel extends Component {
    static propTypes = {
        state: PropTypes.object,
        actions: PropTypes.object
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props);
    }
    handleSelect(eventKey) {
        const data = eventKey;
        if (data) {
            controller.writeln(data);
        }
    }
    render() {
        const { state } = this.props;
        const { unit, canClick, machinePosition, workPosition } = state;
        const displayUnit = (unit === METRIC_UNIT) ? i18n._('mm') : i18n._('in');

        return (
            <div className="display-panel">
                <div className="row no-gutters">
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th className="nowrap">{i18n._('Axis')}</th>
                                <th className="nowrap">{i18n._('Machine Position')}</th>
                                <th className="nowrap">{i18n._('Work Position')}</th>
                                <th className="nowrap">{i18n._('Action')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="axis-label">X</td>
                                <td className="axis-position">
                                    <span className="integer-part">{machinePosition.x.split('.')[0]}</span>
                                    <span className="decimal-point">.</span>
                                    <span className="fractional-part">{machinePosition.x.split('.')[1]}</span>
                                    <span className="dimension-unit">{displayUnit}</span>
                                </td>
                                <td className="axis-position">
                                    <span className="integer-part">{workPosition.x.split('.')[0]}</span>
                                    <span className="decimal-point">.</span>
                                    <span className="fractional-part">{workPosition.x.split('.')[1]}</span>
                                    <span className="dimension-unit">{displayUnit}</span>
                                </td>
                                <td className="axis-control">
                                    <DropdownButton
                                        bsSize="xs"
                                        bsStyle="default"
                                        title="X"
                                        id="axis-x-dropdown"
                                        pullRight
                                        disabled={!canClick}
                                    >
                                        <MenuItem header>{i18n._('Temporary Offsets (G92)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G92 X0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Zero Out Temporary X Axis (G92 X0)')}
                                        </MenuItem>
                                        <MenuItem
                                            eventKey="G92.1 X0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Un-Zero Out Temporary X Axis (G92.1 X0)')}
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header>{i18n._('Work Coordinate System (G54)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G0 X0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Go To Work Zero On X Axis (G0 X0)')}
                                        </MenuItem>
                                        <MenuItem
                                            eventKey="G10 L20 P1 X0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Zero Out Work X Axis (G10 L20 P1 X0)')}
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header>{i18n._('Machine Coordinate System (G53)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G53 G0 X0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Go To Machine Zero On X Axis (G53 G0 X0)')}
                                        </MenuItem>
                                    </DropdownButton>
                                </td>
                            </tr>
                            <tr>
                                <td className="axis-label">Y</td>
                                <td className="axis-position">
                                    <span className="integer-part">{machinePosition.y.split('.')[0]}</span>
                                    <span className="decimal-point">.</span>
                                    <span className="fractional-part">{machinePosition.y.split('.')[1]}</span>
                                    <span className="dimension-unit">{displayUnit}</span>
                                </td>
                                <td className="axis-position">
                                    <span className="integer-part">{workPosition.y.split('.')[0]}</span>
                                    <span className="decimal-point">.</span>
                                    <span className="fractional-part">{workPosition.y.split('.')[1]}</span>
                                    <span className="dimension-unit">{displayUnit}</span>
                                </td>
                                <td className="axis-control">
                                    <DropdownButton
                                        bsSize="xs"
                                        bsStyle="default"
                                        title="Y"
                                        id="axis-y-dropdown"
                                        pullRight
                                        disabled={!canClick}
                                    >
                                        <MenuItem header>{i18n._('Temporary Offsets (G92)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G92 Y0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Zero Out Temporary Y Axis (G92 Y0)')}
                                        </MenuItem>
                                        <MenuItem
                                            eventKey="G92.1 Y0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Un-Zero Out Temporary Y Axis (G92.1 Y0)')}
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header>{i18n._('Work Coordinate System (G54)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G0 Y0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Go To Work Zero On Y Axis (G0 Y0)')}
                                        </MenuItem>
                                        <MenuItem
                                            eventKey="G10 L20 P1 Y0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Zero Out Work Y Axis (G10 L20 P1 Y0)')}
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header>{i18n._('Machine Coordinate System (G53)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G53 G0 Y0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Go To Machine Zero On Y Axis (G53 G0 Y0)')}
                                        </MenuItem>
                                    </DropdownButton>
                                </td>
                            </tr>
                            <tr>
                                <td className="axis-label">Z</td>
                                <td className="axis-position">
                                    <span className="integer-part">{machinePosition.z.split('.')[0]}</span>
                                    <span className="decimal-point">.</span>
                                    <span className="fractional-part">{machinePosition.z.split('.')[1]}</span>
                                    <span className="dimension-unit">{displayUnit}</span>
                                </td>
                                <td className="axis-position">
                                    <span className="integer-part">{workPosition.z.split('.')[0]}</span>
                                    <span className="decimal-point">.</span>
                                    <span className="fractional-part">{workPosition.z.split('.')[1]}</span>
                                    <span className="dimension-unit">{displayUnit}</span>
                                </td>
                                <td className="axis-control">
                                    <DropdownButton
                                        bsSize="xs"
                                        bsStyle="default"
                                        title="Z"
                                        id="axis-z-dropdown"
                                        pullRight
                                        disabled={!canClick}
                                    >
                                        <MenuItem header>{i18n._('Temporary Offsets (G92)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G92 Z0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Zero Out Temporary Z Axis (G92 Z0)')}
                                        </MenuItem>
                                        <MenuItem
                                            eventKey="G92.1 Z0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Un-Zero Out Temporary Z Axis (G92.1 Z0)')}
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header>{i18n._('Work Coordinate System (G54)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G0 Z0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Go To Work Zero On Z Axis (G0 Z0)')}
                                        </MenuItem>
                                        <MenuItem
                                            eventKey="G10 L20 P1 Z0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Zero Out Work Z Axis (G10 L20 P1 Z0)')}
                                        </MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header>{i18n._('Machine Coordinate System (G53)')}</MenuItem>
                                        <MenuItem
                                            eventKey="G53 G0 Z0"
                                            onSelect={::this.handleSelect}
                                            disabled={!canClick}
                                        >
                                            {i18n._('Go To Machine Zero On Z Axis (G53 G0 Z0)')}
                                        </MenuItem>
                                    </DropdownButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DisplayPanel;
