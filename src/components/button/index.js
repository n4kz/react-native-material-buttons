import React, { PropTypes, Component } from 'react';
import { Animated, Easing } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { styles } from './styles';

export default class Button extends Component {
  static defaultProps = {
    rippleContainerBorderRadius: 2,

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

    this.state = {
      focusAnimation: this.props.focusAnimation || new Animated.Value(0),
    };
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
    let focusAnimation = props.focusAnimation;

    if (focusAnimation && focusAnimation !== this.state.focusAnimation) {
      this.setState({ focusAnimation });
    }
  }

  render() {
    let { disabled, color, shadeColor, shadeOpacity, shadeBorderRadius, disabledColor, style, children, ...props } = this.props;
    let { focusAnimation } = this.state;

    let opacity = focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, shadeOpacity],
    });

    let backgroundColor = shadeColor;
    let borderRadius = shadeBorderRadius;

    return (
      <Ripple
        style={[styles.container, { backgroundColor: disabled? disabledColor : color }, style]}

        {...props}

        onPressIn={ () => this.onPressIn() }
        onPressOut={ () => this.onPressOut() }
      >
        <Animated.View style={[styles.shade, { backgroundColor, opacity, borderRadius }]} pointerEvents='none' />
        {children}
      </Ripple>
    );
  }
}
