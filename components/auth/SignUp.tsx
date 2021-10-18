import React, { useState } from 'react';
import { 
    StyleSheet,
    View, 
    Text,
    Image
} from 'react-native';

const SignUp = () => {
    return (
        <>
         <View style={ styles.container }>
            <View style={ styles.imgContainer }>
                <Image style={ styles.img } source={ require("../../assets/login.png") } />
            </View>
         </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,
        borderStyle: 'solid',
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        marginTop: 20
    },
    imgContainer: {
        margin: 10,
    },
    img: {
        height: 200,
        width: 200,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
});

export default SignUp;