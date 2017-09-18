import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

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
    titleStyle: Text.propTypes.style,
    disabledTitleColor: PropTypes.string,
  };

  render() {
    let {
      title,
      titleColor,
      titleStyle,
      disabledTitleColor,
      style,
      ...props
    } = this.props;

    let titleStyleOverrides = {
      color: props.disabled?
        disabledTitleColor:
        titleColor,
    };

    return (
      <Button
        style={[styles.container, style]}
        shadeColor={titleColor}
        rippleColor={titleColor}
        {...props}
      >
        <Text
          style={[styles.title, titleStyle, titleStyleOverrides]}
          numberOfLines={1}
        >
          {String(title).toUpperCase()}
        </Text>
      </Button>
    );
  }
}
