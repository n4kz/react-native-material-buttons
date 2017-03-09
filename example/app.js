import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

let styles = {
  scroll: {
    padding: 4,
    paddingTop: 24,
    backgroundColor: '#E8EAF6',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    backgroundColor: 'rgba(0,0,0,.05)',
  },

  column: {
    justifyContent: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(0,0,0,.05)',
  },

  row: {
    marginBottom: 8,
  },

  card: {
    borderRadius: 2,
    padding: 8,
    margin: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    minHeight: 76,
    justifyContent: 'space-between',
    shadowOpacity: 0.54,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },

  button: {
    margin: 4,
  },

  display: {
    paddingHorizontal: 8,
    fontSize: 20,
    fontWeight: '500',
  },

  text: {
    padding: 8,
    fontSize: 17,
  },
};

export default function init() {
  class Example extends Component {
    render() {
      return (
        <ScrollView style={styles.scroll}>
          <View style={styles.card}>
            <RaisedTextButton title="default button" />
            <TextButton title="default flat button" />
          </View>

          <View style={styles.card}>
            <RaisedTextButton title="disabled button" disabled />
            <TextButton title="disabled flat button" disabled />
          </View>

          <View style={styles.card}>
            <View style={{ flex: 1, paddingVertical: 16 }}>
              <Text style={styles.display}>raised</Text>
              <Text style={styles.text}>Buttons with custom color, titleColor, increased rippleDuration and rippleOpacity</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='flat'   color='#039BE5' titleColor='white' />
              <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='is'     color='#0288D1' titleColor='white' />
              <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='boring' color='#0277BD' titleColor='white' />
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ flex: 1, paddingVertical: 16 }}>
              <Text style={styles.display}>flat</Text>
              <Text style={styles.text}>Buttons with custom titleColor</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <TextButton titleColor='#00796B' title='decline' />
              <TextButton titleColor='#00695C' color='rgba(0, 0, 0, .05)' title='accept' />
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  AppRegistry.registerComponent('example', () => Example);
}
