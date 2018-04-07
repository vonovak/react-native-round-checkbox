import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };

export default class RoundCheckbox extends React.PureComponent {
  static propTypes = {
    onValueChange: PropTypes.func,
    icon: PropTypes.string,
    size: PropTypes.number,
    backgroundColor: PropTypes.string,
    iconColor: PropTypes.string,
    borderColor: PropTypes.string,
    checked: PropTypes.bool,
  };

  static defaultProps = {
    icon: 'ios-checkmark',
    size: 24,
    backgroundColor: '#007AFF',
    iconColor: 'white',
    borderColor: 'grey',
    checked: false,
    onValueChange: () => {},
  };

  render() {
    const iconSize = parseInt(this.props.size * 1.3);
    return (
      <TouchableWithoutFeedback hitSlop={hitSlop} onPress={this._onPress}>
        <View
          shouldRasterizeIOS={true}
          style={[this.getIconWrapperStyle(), styles.commonWrapperStyles]}
        >
          <Icon
            name={this.props.icon}
            color={this.props.checked ? this.props.iconColor : 'transparent'}
            style={{ height: iconSize, fontSize: iconSize, backgroundColor: 'transparent' }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _onPress = () => {
    this.props.onValueChange(!this.props.checked);
  };

  getIconWrapperStyle() {
    return {
      width: this.props.size,
      height: this.props.size,
      backgroundColor: this.props.checked ? this.props.backgroundColor : 'transparent',
      borderColor: this.props.checked ? this.props.backgroundColor : this.props.borderColor,
      borderRadius: this.props.size / 2,
    };
  }
}

const styles = StyleSheet.create({
  commonWrapperStyles: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
