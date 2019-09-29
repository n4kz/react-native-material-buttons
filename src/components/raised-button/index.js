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
    let { focusAnimation } = this.state;

    let buttonStyle = Platform.select({
      ios: {
        ...(props.disabled? { shadowColor: 'transparent' } : {}),

        shadowRadius: props.disabled?
          0:
          focusAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 4],
          }),
      },

      android: {
        elevation: props.disabled?
          0:
          focusAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 8],
          }),
      },
    });

    return (
      <Button
        {...props}
        style={[ styles.container, buttonStyle, style ]}
        focusAnimation={focusAnimation}
      >
        {children}
      </Button>
    );
  }
}
