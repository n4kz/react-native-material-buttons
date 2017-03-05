# react-native-material-buttons

Material buttons

## Installation

```bash
npm install --save react-native-material-buttons
```

## Usage

```javascript
import React, { Component } from 'react';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

export default class Example extends Component {
  render() {
    return (
      <TextButton title='touch me' />
      <RaisedTextButton title='touch me' />
    );
  }
}
```

## Common properties

* `color`                  - Button color (default: rgb(224, 224, 224))
* `shadeColor`             - Button shade color for focused state (default: rgb(0, 0, 0)
* `shadeOpacity`           - Button shade opacity for focused state (default: 0.12)
* `focusAnimationDuration` - Button focus animation duration in ms (default: 225)
* `disabled`               - Button availability (default: false) 
* `disabledColor`          - Button color for disabled state (default: rgba(0, 0, 0, .12))
* `onPress`                - Touch up callback

## TextButton properties

* `title`                  - Button title
* `titleColor`             - Button title color (default: rgb(0, 0, 0))
* `disabledTitleColor`     - Button title color for disabled state (default: rgb(153, 153, 153))

## RaisedTextButton properties

* `title`                  - Button title
* `titleColor`             - Button title color (default: rgb(66, 66, 66))
* `disabledTitleColor`     - Button title color for disabled state (default: rgba(0, 0, 0, .26))

## Example

```bash
git clone https://github.com/n4kz/react-native-material-buttons.git
cd react-native-material-buttons/example
npm install
react-native run-ios # or run-android
```

## Copyright and License

BSD License

Copyright 2017 Alexander Nazarov. All rights reserved.
