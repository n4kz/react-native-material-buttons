import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { styles } from './styles';

export default class Button extends PureComponent {
  static defaultProps = {
    rippleContainerBorderRadius: 2,
    rippleSequential: true,

    hitSlop: { top: 6, right: 4, bottom: 6, left: 4 },

    color: 'rgb(224, 224, 224)',

    shadeColor: 'rgb(0, 0, 0)',
    shadeOpacity: 0.12,
    shadeBorderRadius: 2,

    focusAnimation: null,
    focusAnimationDuration: 225,

    disabledColor: 'rgba(0, 0, 0, .12)',
    disabled: false,
  };

  static propTypes = {
    ...Ripple.propTypes,

    color: PropTypes.string,

    shadeColor: PropTypes.string,
    shadeOpacity: PropTypes.number,
    shadeBorderRadius: PropTypes.number,

    focusAnimation: PropTypes.instanceOf(Animated.Value),
    focusAnimationDuration: PropTypes.number,

    disabledColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);

    this.state = {
      focusAnimation: this.props.focusAnimation || new Animated.Value(0),
    };
  }

  onPress() {
    let { onPress } = this.props;

    if ('function' === typeof onPress) {
      onPress();
    }
  }

  onPressIn() {
    let { focusAnimation } = this.state;
    let { focusAnimationDuration } = this.props;

    Animated
      .timing(focusAnimation, {
        toValue: 1,
        duration: focusAnimationDuration,
        easing: Easing.out(Easing.ease),
      })
      .start();
  }

  onPressOut() {
    let { focusAnimation } = this.state;
    let { focusAnimationDuration } = this.props;

    Animated
      .timing(focusAnimation, {
        toValue: 0,
        duration: focusAnimationDuration,
        easing: Easing.out(Easing.ease),
      })
      .start();
  }

  componentWillReceiveProps(props) {
    let { focusAnimation } = props;

    if (focusAnimation && focusAnimation !== this.state.focusAnimation) {
      this.setState({ focusAnimation });
    }
  }

  render() {
    let { color, disabledColor, shadeColor, shadeOpacity, shadeBorderRadius, style, children, ...props } = this.props;
    let { focusAnimation } = this.state;

    let opacity = focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, shadeOpacity],
    });

    let rippleStyle = {
      backgroundColor: props.disabled? disabledColor : color,
    };

    let shadeStyle = {
      backgroundColor: shadeColor,
      borderRadius: shadeBorderRadius,
      opacity,
    };

    return (
      <Ripple
        {...props}

        style={[styles.container, rippleStyle, style]}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        {children}
        <Animated.View style={[ styles.shade, shadeStyle ]} />
      </Ripple>
    );
  }
}
