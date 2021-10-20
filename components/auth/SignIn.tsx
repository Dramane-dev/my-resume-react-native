import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Platform, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Separator = () => <View style={styles.separator} />;

const SignIn = ({ navigation }: any) => {
    const [auth, setAuth] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formTitle = "Sign In";
    const emailTitle = "E-mail";
    const passwordTitle = "Password";
    const signInButtonTitle = "Connection!";
    const signUpButtonTitle = "Sign up!";

    const onEmailChange = (e: React.SetStateAction<string>) => {
        setEmail(e);
    };

    const onPasswordChange = (e: React.SetStateAction<string>) => {
        setPassword(e);
    };

    const onSubmit = async () => {
        setAuth({
            email,
            password,
        });

        let user: any = await AsyncStorage.getItem("user");

        if (user !== null && JSON.parse(user).email === email && JSON.parse(user).password === password) {
            console.log("[- User found! -]");
            navigation.navigate("My Resume");
        } else {
            navigation.navigate("Signup");
        }
    };

    useEffect(() => {
        AsyncStorage.getItem("user").then((res) => {
            let data: any = res;
            console.log(JSON.parse(data).email);
            console.log(JSON.parse(data).password);
        });
    }, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerKey}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require("../../assets/login.png")} />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formTitle}>{formTitle}</Text>
                    <Text style={styles.fields}>{emailTitle}</Text>
                    <TextInput style={styles.input} value={email} onChangeText={onEmailChange} focusable={true} />
                    <Text style={styles.fields}>{passwordTitle}</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={onPasswordChange}
                        focusable={true}
                    />
                    <Separator />
                    <View style={styles.button}>
                        <Button title={signInButtonTitle} color="#000" onPress={onSubmit} />
                    </View>
                    <Separator />
                    <View style={styles.button}>
                        <Button title={signUpButtonTitle} color="#000" onPress={() => navigation.navigate("Signup")} />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    containerKey: {
        flex: 1,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 30,
        margin: 10,
        marginTop: 20,
    },
    imgContainer: {
        margin: 10,
    },
    img: {
        height: 200,
        width: 200,
        marginRight: "auto",
        marginLeft: "auto",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 30,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#0E1717",
        height: 400,
    },
    formTitle: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 30,
        color: "#fff",
        marginBottom: 30,
    },
    fields: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#fff",
        borderColor: "#fff",
        alignSelf: "stretch",
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        marginTop: 10,
        backgroundColor: "#fff",
        height: 40,
    },
});

export default SignIn;
