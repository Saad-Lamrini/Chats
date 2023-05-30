import { View, Text, StatusBar, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Image, Input } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import initfirebase from '../firebase';

const login = ({ navigation }) => {
  const [email, SetEmail] = useState();
  const [password, Setpassword] = useState();
  const auth = initfirebase.auth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);
  const onclicking = () => {
    navigation.navigate('register');
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 items-center justify-center mb-20"
    >
      <Text className="text-green-900 text-lg ">login</Text>
      <StatusBar
        //backgroundColor="#ff0000" // Set the background color of the status bar
        barStyle="light-content" // Set the text color of the status bar (light content is for light backgrounds)
        hidden={false} // Set to true to hide the status bar
        translucent={false} // Set to true to make the status bar translucent (usually used with a navigation bar)
      />
      <View className="items-center">
        <Image
          className="h-40 w-40 mt-5"
          source={{
            uri: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
          }}
        />
      </View>

      <View className="mt-5">
        <View className="w-60">
          <Input
            placeholder="email"
            autoFocus
            type="email"
            value={email}
            onChangeText={(text) => SetEmail(text)}
          />
        </View>
        <View className="w-60">
          <Input
            placeholder="Password"
            autoFocus
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => Setpassword(text)}
          />
        </View>
      </View>
      <View className="">
        <View className="w-40">
          <Button title="login" className="w-40" />
        </View>
        <View className="w-40 mt-5">
          <Button
            title="Register"
            type="outline"
            className="flex-1"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default login;
