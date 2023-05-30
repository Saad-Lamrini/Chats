import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import CustomListItem from '../components/CustomListItem';
import { Avatar, Image } from 'react-native-elements';
import initfirebase from '../firebase';

const home = ({ navigation, route }) => {
  const auth = initfirebase.auth();
  const signout = () => {
    auth.signOut().then(() => {
      navigation.replace('login');
    });
  };
  useLayoutEffect(() => {
    console.log(route.params.img);
    navigation.setOptions({
      title: 'signal',
      headerStyle: {
        height: 50,
        backgroundColor: '#fff',
        headerTitleStyle: { color: 'black' },
        headerTintColor: '#000',
        headerLeft: () => {
          <View className="ml-20">
            <Avatar rounded source={{ uri: route.params.img }} />
            <Text>fff</Text>
          </View>;
        },
        headerRight: () => {
          <View className="w-5 bg-cyan-900">
            <Avatar rounded source={{ uri: route.params.img }} />
          </View>;
        },
      },
    });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar
        //backgroundColor="#ff0000" // Set the background color of the status bar
        barStyle="light-content" // Set the text color of the status bar (light content is for light backgrounds)
        hidden={true} // Set to true to hide the status bar
        translucent={false} // Set to true to make the status bar translucent (usually used with a navigation bar)
      />
      <CustomListItem />
      <TouchableOpacity onPress={signout}>
        <Image source={{ uri: route.params.img }} className="h-7 w-8" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default home;
