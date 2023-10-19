import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { styles } from './style';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderFrom';

export function Form() {
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");
  const [deadline, setDeadline] = useState("");

  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");

  async function handleNew() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        name,
        descricao,
        deadline
      }

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Salvo com sucesso"
      })
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Não foi possivel salvar"
      })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <ScrollView>

          <HeaderForm />

          <View style={styles.form}>
            <Input
              label="Nome do Projeto"
              onChangeText={setName}
            />
            <Input
              label="Descrição do projeto"
              autoCapitalize="none"
              onChangeText={setDescricao}
            />
            <Input
              label="Deadline do Projeto"
              onChangeText={setDeadline}
            />
          </View>

          <View style={styles.footer}>
            <Button
              title="Salvar"
              onPress={handleNew}
              style={styles.botao}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}