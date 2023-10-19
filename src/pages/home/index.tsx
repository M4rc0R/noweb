import React from 'react';
import { useCallback, useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Card, CardProps } from '../../components/Card';

import { useFocusEffect } from '@react-navigation/native';

import { styles } from './style';
import { Button } from '../../components/Button';
import { HeaderHome } from '../../components/HeaderHome';

export function Home() {
  const [data, setData] = useState<CardProps[]>([]);

  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter((item: CardProps) => item.id !== id);
    setItem(JSON.stringify(data));
    setData(data);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));


  return (
    <View style={styles.container}>

      <View style={styles.homeContent}>
        <Text style={{fontSize:30, fontWeight:'600'}}>Olá</Text>
        <Text  style={{fontSize:26, fontWeight:'400'}}>Kathryn</Text>
      

      <View style={styles.listHeader}>
        <View>
        <Text style={styles.title}>
          Seus Projetos
        </Text>

        <Text style={styles.listCount}>
          {`${data.length} ao total`}
        </Text>
        <Button style={styles.btnVerMais} onPress={()=>{}} title='Ver Mais'/>
        </View>
        <View>
          <Image style={{width:100, height:100, borderRadius:100,}} source={{uri: 'https://reactjs.org/logo-og.png'}}/>
        </View>
      </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => handleRemove(item.id)}
          />
        }
      />
      <HeaderHome/>
      
      
    </View>
  );
}