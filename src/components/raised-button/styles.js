import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 88,
    paddingHorizontal: 16,

    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 0.54,
        shadowOffset: { width: 0, height: 2 },
      },

      android: {
        elevation: 2,
      },
    }),
  },
});

export { styles };
