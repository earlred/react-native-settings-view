// Depdendencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Mejia.
 * @description Styles definition for component.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
  },
  title: {
    flex: 1,
    backgroundColor: 'gray',
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
