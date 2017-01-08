import React, {PropTypes} from 'react';

import {
    View,
    TouchableWithoutFeedback,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

export default class RoundCheckbox extends React.Component {

    static propTypes = {
        onValueChange: React.PropTypes.func,
        icon: React.PropTypes.string,
        size: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        iconColor: React.PropTypes.string,
        borderColor: React.PropTypes.string,
        checked: React.PropTypes.bool,
    };

    static defaultProps = {
        icon: "ios-checkmark",
        size: 24,
        backgroundColor: '#007AFF',
        iconColor: 'white',
        borderColor: 'grey',
        checked: false,
        onValueChange: ()=>{},
    };

    iconWrapperStyle() {
        return {
            width: this.props.size,
            height: this.props.size,
            backgroundColor: this.props.checked ? this.props.backgroundColor : 'transparent',
            borderColor: this.props.checked ? this.props.backgroundColor : this.props.borderColor,
            borderRadius: this.props.size / 2,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
        };
    }

    _onPress = () => {
        this.props.onValueChange(!this.props.checked)
    }

    render() {
        return (
            <TouchableWithoutFeedback hitSlop={{top: 8, bottom: 8, left: 8, right: 8}} onPress={this._onPress}>
                <View shouldRasterizeIOS={true} style={this.iconWrapperStyle()}>
                    <Icon
                        name={this.props.icon}
                        size={this.props.size * 1.3}
                        color={this.props.checked ? this.props.iconColor : 'transparent'}
                        style={{height: this.props.size * 1.3, backgroundColor: 'transparent'}}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
