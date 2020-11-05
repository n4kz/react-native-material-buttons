import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Animated, Text } from 'react-native';

import Button from '../button';
import { styles } from './styles';

export default class TextButton extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    disabledColor: 'transparent',

    titleColor: 'rgb(0, 0, 0)',
    disabledTitleColor: 'rgba(0, 0, 0, .26)',

    shadeOpacity: 0.20,
  };

  static propTypes = {
    ...Button.propTypes,

    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string,
    titleStyle: Text.style,
    disabledTitleColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    let {
      disabled,
      disableAnimation = new Animated.Value(disabled? 1 : 0),
    } = this.props;

    this.state = {
      disableAnimation,
    };
  }

  render() {
    let { disableAnimation } = this.state;
    let {
      title,
      titleColor,
      titleStyle,
      disabledTitleColor,
      style,
      ...props
    } = this.props;

    let titleStyleOverrides = {
      color: disableAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [titleColor, disabledTitleColor],
      }),
    };

    return (
      <Button
        style={[styles.container, style]}
        shadeColor={titleColor}
        rippleColor={titleColor}
        {...props}
        disableAnimation={disableAnimation}
      >
        <Animated.Text
          style={[styles.title, titleStyle, titleStyleOverrides]}
          numberOfLines={1}
        >
          {title}
        </Animated.Text>
      </Button>
    );
  }
}
