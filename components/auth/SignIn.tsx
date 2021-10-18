import React, { useState } from "react";
import { 
    StyleSheet,
    View, 
    Text,
    Image,
    KeyboardAvoidingView
} from 'react-native';

type Auth = {
    email: string,
    password: string
};

const SignIn = () => {
    const [auth, setAuth] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e: Auth) => {
        console.log(e);
    };

    const onPasswordChange = (e: Auth) => {
        console.log(e);
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.imgContainer }>
                <Image style={ styles.img } source={ require("../../assets/login.png") } />
            </View>
            <View style={ styles.formContainer }>

            </View>
        </View>
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
    formContainer: {

    }
});

export default SignIn;