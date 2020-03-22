import React,{useContext} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const ShowScreen= ({navigation}) =>{
    const {state} =useContext(Context);
  // console.log(navigation.getParam('id'));
const blogPost =state.find(blogPost => blogPost.id === navigation.getParam('id'));
  return (
    <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
);
};
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        
      headerRight:() => <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id: navigation.getParam('id')})}>
         <Icon name="edit" size={30} />
      </TouchableOpacity> 

    };
};
const styles =StyleSheet.create ({});
export default ShowScreen;