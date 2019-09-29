import { StyleSheet, Platform } from 'react-native';
import RN from 'react-native/package.json';

let style = {};
let [, major, minor] = RN.version
  .match(/^(\d+)\.(\d+)\.(.+)$/);

if ('android' === Platform.OS) {
  style.textAlignVertical = 'center';

  if (!major && minor >= 40) {
    style.includeFontPadding = false;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 8,
  },

  title: {
    textAlign: 'center',
    textTransform: 'uppercase',

    backgroundColor: 'transparent',

    fontSize: 14,
    fontWeight: '500',

    ...style,
  },
});

export { styles };
