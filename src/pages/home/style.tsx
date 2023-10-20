import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
  },
  homeContent:{
    marginLeft: 28,
    marginRight: 28,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D434D'
  },
  listHeader: {
    backgroundColor:'rgba(135, 228, 167, 0.78)',
    width: '100%',
    height: 180,
    borderRadius:28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listCount: {
    color: '#111',
    marginTop: 2,
    fontSize: 13
  },
  btnVerMais:{
    marginTop:31,
    color:'#EC7669',
    
  },
  list: {
    flex: 1,
    width: '100%'
  },
  listContent: {
    padding: 24,
    paddingBottom: 150
  },
  searchArea:{
    height:50,
    justifyContent: 'center',
    marginBottom:36,
  },
  search:{
    backgroundColor:"#F8F8F6",
    padding: 10,
    borderWidth: 1,
    borderRadius:6,
    borderColor:'#9B9B9B',
  }
  
});