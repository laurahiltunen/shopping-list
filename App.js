import React, {useState} from 'react';
import {Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const lisaaListalle= () => {
    setData([...data, {key:text}]);
    setText('');
  }

  const tyhjenna= () => {
    setData([]);
  }

  return (
    <View style={{height: 100, flex:1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 100}}>
    
    <View style={{flex: 1}}>
    <TextInput style={{width:200, borderColor: 'gray', borderWidth: 1}}
    onChangeText={text=>  setText(text)}
    value={text}/>
    </View>
   
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", width: 200}}>
    <Button onPress={lisaaListalle} title="Lisää"/>
    <Button onPress={tyhjenna} title="Tyhjennä"/>
    </View> 

    <View style={{flex: 1}}>
    <Text>Kauppalista:</Text>
    <FlatList 
      data={data}
      renderItem={({item}) => 
        <Text>{item.key}</Text >}/>
    </View> 
    
    </View>
  );
}


