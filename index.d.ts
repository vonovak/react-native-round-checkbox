import * as React from 'react';

interface RoundCheckboxProps {
    onValueChange?: () => void,
    icon?: string,
    size?: number,
    backgroundColor?: string,
    iconColor?: string,
    borderColor?: string,
    checked?: boolean,
}
export default class RoundCheckbox extends React.Component<RoundCheckboxProps, any> {
}
