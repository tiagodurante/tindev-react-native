/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { KeyboardAvoidingView, Platform, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native'

import api from '../services/api'
import logo from '../assets/logo.png'

export default function Login({navigation}) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('username').then((user) => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    })
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', {
      username,
    })

    const { _id } = response.data;
    await AsyncStorage.setItem('username', _id);

    navigation.navigate('Main', { user: _id });
  }

  return (
    <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.container}>
      <Image source={logo}/>
      <TextInput value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} placeholderTextColor="#999" placeholder="digite o seu usuário do github" style={styles.input}/>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});