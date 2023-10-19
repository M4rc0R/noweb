import { useState } from 'react';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {ModalItens} from '../Modal/index';


import { styles } from './style';

export type CardProps = {
  id: string;
  name: string;
  descricao: string;
  deadline: string;
}
type Props = {
  data: CardProps;
  onPress: () => void;
}

export function Card({ data, onPress  }: Props) {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.title}>{data.descricao}</Text>
          <Text style={styles.title}>{data.deadline}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>{setModalVisible(true)}}
      >
        <MaterialIcons
          name="arrow-right"
          size={22}
          color="#888D97"
        />
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType='fade' transparent={true} onRequestClose={() => setModalVisible(false)}>
        <ModalItens handClose={()=> setModalVisible(false)}/>
        
      </Modal>
    </View>
  );
}