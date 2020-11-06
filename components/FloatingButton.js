import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/colors';

const FloatingButton = (props) => {
    return ( 
        <TouchableOpacity activeOpacity={0.8} onPress={props.FloatAction}>
            <View style={styles.floatButton}>
                <Ionicons name={props.IconName} size={50} color='white'/>
            </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    floatButton:{
        width:50,
        height:50,
        backgroundColor:colors.primaryColor,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        shadowOffset:{
            width:3,
            height:3
        },
        shadowColor:colors.primaryColor,
        shadowOpacity:0.2
    },
})
 
export default FloatingButton;