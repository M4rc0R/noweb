import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './style';

export function HeaderHome() {
  const navigation = useNavigation();

  function handleAdd() {
    navigation.navigate("Form", {});
  }

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button1}>
      <MaterialIcons
          name="assessment"
          size={25}
          color="#111"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
      <MaterialIcons
          name="cloud"
          size={25}
          color="#111"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleAdd}
        style={styles.button}
      >
        <MaterialIcons
          name="add"
          size={22}
          color="#FFF"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
      <MaterialIcons
          name="comment"
          size={25}
          color="#111"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
      <MaterialIcons
          name="category"
          size={25}
          color="#111"
        />
      </TouchableOpacity>
    </View>
  );
}