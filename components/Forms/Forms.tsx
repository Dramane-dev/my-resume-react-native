import React, { useState } from "react";
import { View, Text, TextInput, Button, KeyboardAvoidingView, StyleSheet, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Separator = () => <View style={styles.separator} />;

const Forms = () => {
    const [users, setUsers] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const formTitle = "Contact Form";
    const nameTitle = "Name";
    const emailTitle = "E-mail";
    const phoneTitle = "Phone number";
    const buttonTitle = "Send";

    const onNameChange = (e: React.SetStateAction<string>) => {
        setName(e);
    };

    const onEmailChange = (e: React.SetStateAction<string>) => {
        setEmail(e);
    };

    const onPhoneChange = (e: React.SetStateAction<string>) => {
        setPhone(e);
    };

    const onSubmit = (): void => {
        setUsers({
            name,
            email,
            phone,
        });
        console.log(users);
        AsyncStorage.setItem("User Contact", JSON.stringify(users));
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerKey}>
            <View style={styles.container}>
                <Text style={styles.formTitle}>{formTitle}</Text>
                <Text style={styles.fields}>{nameTitle}</Text>
                <TextInput style={styles.input} value={name} onChangeText={onNameChange} focusable={true} />
                <Text style={styles.fields}>{emailTitle}</Text>
                <TextInput style={styles.input} value={email} onChangeText={onEmailChange} focusable={true} />
                <Text style={styles.fields}>{phoneTitle}</Text>
                <TextInput style={styles.input} value={phone} onChangeText={onPhoneChange} focusable={true} />
                <Separator />
                <View style={styles.button}>
                    <Button title={buttonTitle} color="#000" onPress={onSubmit} />
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
        marginVertical: 8,
        borderBottomColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        height: 40,
        marginTop: 10,
        backgroundColor: "#fff",
    },
});

export default Forms;
