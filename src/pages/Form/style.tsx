import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F5',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    padding: 24,
  },
  content: {
    width: '100%',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    padding: 24,
    marginBottom: getBottomSpace() + 24,
    alignItems: 'center',
  },
  botao:{
    height: 56,
    width: 150,
    borderRadius: 18,
    borderColor: '#fff',
    backgroundColor:'#1BD15D',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});