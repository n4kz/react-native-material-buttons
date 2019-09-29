import React, { PureComponent } from 'react';
import { Animated, Platform } from 'react-native';

import { styles } from './styles';
import Button from '../button';

export default class RaisedButton extends PureComponent {
  static propTypes = {
    ...Button.propTypes,
  };

  constructor(props) {
    super(props);

    let { focusAnimation = new Animated.Value(0) } = this.props;

    this.state = {
      focusAnimation,
    };
  }

  render() {
    let { style, children, ...props } = this.props;
    let { disabled } = this.props;
    let { focusAnimation } = this.state;

    let buttonStyle = {
      ...((disabled && Platform.OS === 'ios')? { shadowColor: 'transparent' } : {}),

      [Platform.select({ ios: 'shadowRadius', android: 'elevation' })]:
        disabled? 0 : focusAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [2, Platform.select({ ios: 4, android: 8 })],
        }),
    };

    return (
      <Button style={[styles.container, buttonStyle, style]} {...props} focusAnimation={focusAnimation}>
        {children}
      </Button>
    );
  }
}
