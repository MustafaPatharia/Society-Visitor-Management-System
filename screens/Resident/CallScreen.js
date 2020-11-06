import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import CallCard from '../../components/CallCard';

const CallScreen = (props) => {
    const callHandler = (type) => {
        if (type === "Watchman"){
            console.log('Watchman Connected')
        }
        else if (type === "Secretary"){
            console.log('Secretary Connected')
        }
        else{
            console.log('waiting...')
        }
    }
    return ( 
        <View style={styles.Screen}>
            <CallCard ImageSource={require('../../assets/images/security-guard.png')} primaryText='Watchman' CallAction={() => callHandler('Watchman')} />
            <CallCard  ImageSource={require('../../assets/images/old-man.png')} primaryText='Secretary' CallAction={() => callHandler('Secretary')}/>
        </View>
     );
}

const styles = StyleSheet.create({
    Screen:{
        padding:5,
        marginTop:10,
        flexDirection:'row'
    }
})
 
export default CallScreen;