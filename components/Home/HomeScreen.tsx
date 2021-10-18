import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView
} from 'react-native';

import Profile from '../Profile/Profile';
import Article from '../Article/Article';
import Form from '../Forms/Forms';

const data = [
  'Student at ESTIAM' ,
  'The Odin Project' ,
  'Python Bot',
  'Authentication System'
];
  
const personalActivities = [
  'CodeSignal' ,
  'The Odin Project' ,
  'Python Bot',
  'Authentication System'
];
  
const hobbies = [
  'Street Workout' ,
  'Randonnée' ,
  'Méditation',
  'Lecture',
  'Programmation',
  'Problem solving'
];

const HomeScreen = () => {
    return (
     <ScrollView>
       <View style={ styles.container }>
         <View style={ styles.titleContainer }>
           <Text style={ styles.title }>{ 'Dramane\'s resume' }</Text>
         </View>
         <View style={ styles.profile }>
           <Profile
           name={ 'Dramane' } 
           lastname={ 'Kamissoko' } 
           age={ 24 } />
         </View>
         <View style={ styles.article }>
           <Article 
           data={ data }
           title={ 'WORK EXPERIENCE' }
           />
         </View>
         <View style={ styles.persoActivityAndHobbi }>
           <View style={ styles.persoActivity }>
           <Article 
             data={ personalActivities }
             title={ 'PERSONAL ACTIVITIES' }
           />
           </View>
           <View style={ styles.hobbie } >
           <Article 
             data={ hobbies }
             title={ 'HOBBIE' }
           />
           </View>
         </View>
         <View style={ styles.formContainer }>
           <Form />
         </View>
       </View>
     </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20
    },
    title: {
      fontSize: 40,
      fontWeight: '900'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginTop: 50,
      marginLeft: 5,
      marginRight: 5,
    },
    profile: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 30
    },
    article: {
      width: 350,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 30
    },
    persoActivityAndHobbi: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    formContainer: {
      marginTop: 50
    },
    persoActivity: {
      width: 195
    },
    hobbie: {
      width: 195
    }
});

export default HomeScreen;