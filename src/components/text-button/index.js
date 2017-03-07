import React, { PropTypes, Component } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';
import Button from '../button';

export default class TextButton extends Component {
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
    disabledTitleColor: PropTypes.string,
  };

  render() {
    let { title, titleColor, disabledTitleColor, style, ...props } = this.props; 
    let { disabled } = this.props;

    let titleStyle = {
      color: disabled? disabledTitleColor : titleColor,
    };

    return (
      <Button rippleColor={titleColor} shadeColor={titleColor} style={[styles.container, style]} {...props}>
        <Text style={[styles.text, titleStyle]} numberOfLines={1} pointerEvents='none'>
          {String(title).toUpperCase()}
        </Text>
      </Button>
    );
  }
}
