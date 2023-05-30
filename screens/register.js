import { View, KeyboardAvoidingView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';
import initfirebase from '../firebase';

const register = ({ navigation }) => {
  const [name, Setname] = useState();
  const [email, Setemail] = useState();
  const [passw, Setpassw] = useState();
  const [imgUrl, SetimgUrl] = useState();
  const auth = initfirebase.auth();
  const submitting = () => {
    auth
      .createUserWithEmailAndPassword(email, passw)
      .then((authUser) => {
        authUser.user.updateProfile({
          display: name,
          photoURL: imgUrl,
        });

        navigation.replace('login');
      })
      .catch((erreur) => {
        alert(erreur);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="justify-center items-center flex-1 p-10"
    >
      <Text className="text-lg text-center text-green-600 bottom-7">
        Create a Signal acount
      </Text>

      <Input
        placeholder="Full name"
        autoFocus
        type="text"
        value={name}
        onChangeText={(text) => {
          Setname(text);
        }}
      />

      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChangeText={(text) => {
          Setemail(text);
        }}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={passw}
        onChangeText={(text) => {
          Setpassw(text);
        }}
      />
      <Input
        placeholder="image pics url"
        value={imgUrl}
        onChangeText={(text) => {
          SetimgUrl(text);
        }}
        //onSubmitEditing={submitting}
      />
      <View className="w-32">
        <Button title="Register" raised onPress={submitting} className="w-24" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default register;
