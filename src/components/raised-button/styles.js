import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 36,
    minWidth: 88,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    ...Platform.select({
      android: {
        elevation: 2,
      },
    }),
  },
});

export { styles };
