import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
const CustomListItem = (props) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        }}
      />
      <ListItem.Content>
        <ListItem.Title className="font-extrabold">John Doe</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          this is a sub title this is a sub title this is a sub title
        </ListItem.Subtitle>
      </ListItem.Content>
      <Text className="text-red-600"></Text>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
