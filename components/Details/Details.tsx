import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Details = ({ navigation }: any) => {
    const [data, setData]: any = useState({});
    const getData = async (): Promise<void> => {
        const element: any = await AsyncStorage.getItem("user");

        if (element !== null) {
            console.log(element);
            let name: string = JSON.parse(element).name;
            let email: string = JSON.parse(element).email;
            let password: string = JSON.parse(element).password;

            setData({
                name,
                email,
                password,
            });
        }
    };
    const buttonTitle = "Log out!";
    const buttonDeleteAccountTitle = "Delete my account!";

    useEffect(() => {
        getData();
        console.log(navigation.getState());
    }, []);

    const onLogOut = async () => {
        console.log("logout");
        await AsyncStorage.removeItem("user").then(() => {
            console.log("then");
            navigation.navigate("Signin");
        });
    };

    const onDeleteAccount = async () => {
        await AsyncStorage.removeItem("user").then(async () => {
            await setData({});
            console.log("[- User deleted! -]");
            navigation.navigate("Signin");
        });
    };

    return (
        <>
            <ScrollView>
                <View style={styles.detailsContainer}>
                    <View style={styles.profile}>
                        <View style={styles.container}>
                            <View>
                                <Image style={styles.img} source={require("../../assets/secret.png")} />
                            </View>
                            <View style={styles.infosContainer}>
                                <Text style={styles.infos}>Name : {data.name}</Text>
                                <Text style={styles.infos}>Email : {data.email}</Text>
                                <Text style={styles.infos}>Password : {data.password}</Text>
                            </View>
                            <View style={styles.button}>
                                <Button title={buttonTitle} color="#fff" onPress={onLogOut} />
                            </View>
                            <View style={styles.button}>
                                <Button title={buttonDeleteAccountTitle} color="#fff" onPress={onDeleteAccount} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        padding: 30,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#0E1717",
    },
    profile: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 30,
    },
    img: {
        height: 200,
        width: 200,
        marginBottom: 80,
    },
    infosContainer: {
        display: "flex",
        marginBottom: 50,
    },
    infos: {
        fontSize: 25,
        fontWeight: "900",
        color: "#fff",
    },
    button: {
        height: 40,
        width: 200,
        marginTop: 15,
        backgroundColor: "#c0392b",
        borderRadius: 30,
    },
});

export default Details;
