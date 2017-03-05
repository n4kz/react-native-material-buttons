import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

let styles = {
  scroll: {
    padding: 4,
    paddingTop: 64,
    backgroundColor: '#E8EAF6',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  row: {
    marginBottom: 8,
  },
};

export default function init() {
  class Example extends Component {
    render() {
      return (
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <RaisedTextButton title='flat' color='#E040FB' titleColor='white' rippleOpacity={0.54} />
            <RaisedTextButton title='is' disabledColor='#EA80FC' disabledTitleColor='rgba(255,255,255,.54)' disabled />
            <RaisedTextButton title='boring' color='#AA00FF' titleColor='white' rippleOpacity={0.54} />
          </View>

          <View style={styles.container}>
            <RaisedTextButton title='use' color='#FFEA00' />
            <RaisedTextButton title='raised' color='#FFC400' />
          </View>

          <View style={styles.container}>
            <TextButton title='in' titleColor='#FF5722' />
            <TextButton title='soviet russia' disabledColor='rgba(255,0,0,.12)' disabledTitleColor='#FF5252' disabled />
          </View>

          <View style={styles.container}>
            <TextButton title='buttons' titleColor='#00838F' shadeColor='#00B8D4' />
            <TextButton title='tap' titleColor='#00695C' shadeColor='#00BFA5' />
            <TextButton title='you' titleColor='#0277BD' shadeColor='#0091EA' />
          </View>


          <View style={styles.row}>
            <TextButton title='big flat button' titleColor='#D500F9' shadeColor='#D500F9' rippleDuration={750} />
          </View>

          <View style={styles.row}>
            <TextButton title='big disabled flat button' disabledTitleColor='#EA80FC' disabled />
          </View>

          <View style={styles.row}>
            <TextButton title='big flat button with very long truncated title' titleColor='#AA00FF' shadeColor='#AA00FF' rippleDuration={750} />
          </View>

          <View style={styles.row}>
            <RaisedTextButton title='big raised button' color='#76FF03' />
          </View>

          <View style={styles.row}>
            <RaisedTextButton title='big disabled raised button' disabledColor='#F4FF81' disabled />
          </View>

          <View style={styles.row}>
            <RaisedTextButton title='big raised button with very long truncated title' color='#C6FF00' />
          </View>

          <View style={styles.row}>
            <RaisedTextButton title='custom ripple and shade' color='#69F0AE' titleColor='white' shadeColor='#FFFF00' shadeOpacity={0.54} rippleDuration={1200} rippleColor='#D500F9' rippleOpacity={1.0} />
          </View>
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('example', () => Example);
}
