import React from 'react';
import { 
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

export interface Props {
    data: string[],
    title: string
}

const Article: React.FC<Props> = ({ data, title }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
            <FlatList 
             data={ data }
             renderItem={ data => 
              <View>
                <Text style={ styles.item }>{ '-> ' +  data.item }</Text> 
              </View>
             }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
        borderStyle: 'solid',
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#0E1717',
        height: 200
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    item : {
        fontSize: 15,
        fontWeight: '700',
        color: '#fff'
    }
});

export default Article;