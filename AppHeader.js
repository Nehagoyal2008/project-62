import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Online School Classes Attendance App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lightblue',
  },
  text:{
    color: 'white',
    padding:24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:20,
  }
});

export default AppHeader;