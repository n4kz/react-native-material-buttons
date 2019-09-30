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

    let {
      disabled,
      focusAnimation = new Animated.Value(0),
      disableAnimation = new Animated.Value(disabled? 1 : 0),
    } = this.props;

    this.state = {
      focusAnimation,
      disableAnimation,
    };
  }

  render() {
    let { focusAnimation, disableAnimation } = this.state;
    let { style, children, ...props } = this.props;

    let animation = Animated
      .subtract(focusAnimation, disableAnimation);

    let buttonStyle = Platform.select({
      ios: {
        shadowOpacity: disableAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.30, 0],
        }),

        shadowRadius: animation.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 2, 4],
        }),

        shadowOffset: {
          width: 0,

          height: animation.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 2],
          }),
        },
      },

      android: {
        elevation: animation.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 2, 8],
        }),
      },
    });

    return (
      <Button
        {...props}
        style={[ styles.container, buttonStyle, style ]}
        focusAnimation={focusAnimation}
        disableAnimation={disableAnimation}
      >
        {children}
      </Button>
    );
  }
}
