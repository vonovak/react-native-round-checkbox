import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface RoundCheckboxProps {
    onValueChange?: () => void,
    icon?: string,
    size?: number,
    backgroundColor?: string,
    iconColor?: string,
    borderColor?: string,
    checked?: boolean,
    style?: StyleProp<ViewStyle>;
}
export default class RoundCheckbox extends React.Component<RoundCheckboxProps, any> {
}
