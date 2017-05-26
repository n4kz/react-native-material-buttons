import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 8,
  },

  text: {
    textAlign: 'center',

    backgroundColor: 'transparent',

    fontSize: 14,
    fontWeight: '500',

    ...Platform.select({
      ios: {},

      android: {
        includeFontPadding: false,
        textAlignVertical: 'center',
      },
    }),
  },
});

export { styles };
