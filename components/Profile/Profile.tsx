import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export interface Props {
    name: string;
    lastname: string;
    age: number;
}

const Profile: React.FC<Props> = ({ name, lastname, age }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={require("../../assets/me.png")} />
            </View>
            <View>
                <Text style={styles.infos}>{name}</Text>
                <Text style={styles.infos}>{lastname}</Text>
                <Text style={styles.infos}>{age}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 30,
        borderStyle: "solid",
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1,
    },
    img: {
        height: 100,
        width: 100,
    },
    infos: {
        fontSize: 30,
        fontWeight: "900",
    },
});

export default Profile;
