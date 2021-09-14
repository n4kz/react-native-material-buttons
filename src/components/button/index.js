import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated, Easing } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { styles } from './styles';

export default class Button extends PureComponent {
  static defaultProps = {
    rippleContainerBorderRadius: 2,
    rippleSequential: true,

    hitSlop: { top: 6, right: 4, bottom: 6, left: 4 },

    color: 'rgb(224, 224, 224)',
    disabledColor: 'rgb(240, 240, 240)',

    shadeColor: 'rgb(0, 0, 0)', 
    shadeOpacity: 0.12,
    shadeBorderRadius: 2,

    focusAnimationDuration: 225,
    disableAnimationDuration: 225,

    disabled: false,
  };

  static propTypes = {
    ...Ripple.propTypes,

    color: PropTypes.string,
    disabledColor: PropTypes.string,

    shadeColor: PropTypes.string,
    shadeOpacity: PropTypes.number,
    shadeBorderRadius: PropTypes.number,

    focusAnimation: PropTypes.instanceOf(Animated.Value),
    focusAnimationDuration: PropTypes.number,

    disableAnimation: PropTypes.instanceOf(Animated.Value),
    disableAnimationDuration: PropTypes.number,

    payload: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onFocusChange.bind(this, true);
    this.onPressOut = this.onFocusChange.bind(this, false);

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

  componentDidUpdate(prevProps) {
    let { disabled } = this.props;

    if (disabled ^ prevProps.disabled) {
      let { disableAnimationDuration: duration } = this.props;
      let { disableAnimation } = this.state;

      Animated
        .timing(disableAnimation, { 
        useNativeDriver: false, toValue: disabled? 1 : 0, duration })
        .start();
    }
  }

  onPress() {
    let { onPress, payload } = this.props;

    if ('function' === typeof onPress) {
      onPress(payload);
    }
  }

  onFocusChange(focused) {
    let { focusAnimation } = this.state;
    let { focusAnimationDuration } = this.props;

    Animated
      .timing(focusAnimation, {
        toValue: focused? 1 : 0,
        duration: focusAnimationDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false
      })
      .start();
  }

  render() {
    let { focusAnimation, disableAnimation } = this.state;
    let {
      color,
      disabledColor,
      shadeColor,
      shadeOpacity,
      shadeBorderRadius,
      style,
      children,
      ...props
    } = this.props;

    let rippleStyle = {
      backgroundColor: disableAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [color, disabledColor],
      }),
    };

    let shadeContainerStyle = {
      borderRadius: shadeBorderRadius,
    };

    let shadeStyle = {
      backgroundColor: shadeColor,
      opacity: focusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, shadeOpacity],
      }),
    };

    return (
      <Ripple
        {...props}

        style={[ styles.container, rippleStyle, style ]}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        {children}

        <View style={[ styles.shadeContainer, shadeContainerStyle ]}>
          <Animated.View style={[ styles.shade, shadeStyle ]} />
        </View>
      </Ripple>
    );
  }
}
