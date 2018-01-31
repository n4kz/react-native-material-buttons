import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import RaisedButton from '../raised-button';
import { styles } from './styles';

export default class RaisedTextButton extends PureComponent {
  static defaultProps = {
    titleColor: 'rgb(66, 66, 66)',
    disabledTitleColor: 'rgba(0, 0, 0, .26)',
  };

  static propTypes = {
    ...RaisedButton.propTypes,

    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string,
    titleStyle: Text.propTypes.style,
    disabledTitleColor: PropTypes.string,
    numberOfLines: PropTypes.number,
  };

  render() {
    let {
      title,
      titleColor,
      titleStyle,
      disabledTitleColor,
      numberOfLines,
      ...props
    } = this.props;

    let titleStyleOverrides = {
      color: props.disabled?
        disabledTitleColor:
        titleColor,
    };

    return (
      <RaisedButton rippleColor={titleColor} shadeColor={titleColor} {...props}>
        <Text
          style={[styles.title, titleStyle, titleStyleOverrides]}
          numberOfLines={numberOfLines}
        >
          {String(title).toUpperCase()}
        </Text>
      </RaisedButton>
    );
  }
}
