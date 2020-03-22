import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const IndexScreen =({navigation}) => {
   // console.log(props)
    const {state , deleteBlogPost, getBlogPosts } =useContext(Context);
    useEffect(()=> {
     getBlogPosts();
     
     const listener = navigation.addListener('didFocus', () => {

        getBlogPosts();
  
      });
  
  

    },[]);
    return(
        <View>

            <FlatList
             data ={state}
             keyExtractor={blogPost =>blogPost.title}
             renderItem={({item})=> {
                return(
                    <TouchableOpacity onPress ={() => navigation.navigate('Show', {id:item.id})}>
                     <View style={styles.row}>
                     <Text style ={styles.title}>{item.title} - {item.id}</Text>
                     <TouchableOpacity onPress ={()=> deleteBlogPost(item.id)}>
                     <Icon name="rocket" size={35} color="#900" />
                     </TouchableOpacity>
                     </View>
                     </TouchableOpacity>
                );
            }}
             />
        </View>
    );
};
IndexScreen.navigationOptions = ({navigation}) => {
    return {
        
      headerRight:() => <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
         <Icon name="plus" size={30} />
      </TouchableOpacity> 

    };
};
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent :'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
       // borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: 'gray'
    },
    title:{
        fontSize:18,
        marginTop:10
    },
    
});
export default IndexScreen;