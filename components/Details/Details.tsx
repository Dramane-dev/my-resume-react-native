import React, { useEffect, useState } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = () => {
    const [data, setData] = useState('');
    const getData = async () => {
        const element = await AsyncStorage.getItem('User Contact');

        if (element !== null) {
            setData(JSON.parse(element));
        }
    };

    useEffect(() => {
        getData();
    },[]);

    return (
        <>
         <View style={ styles.container }>
             <Text>Nom : { data['Name'] }</Text>
         </View>
       </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
    }
});

export default Details;