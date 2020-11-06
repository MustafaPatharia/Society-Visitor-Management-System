import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../assets/colors'

const QuickAdd = (props) => {
    return ( 
        <TouchableOpacity activeOpacity={0.8} onPress={props.AddAction}> 
            <View style={styles.QuickAdd}>
                <Ionicons  name='ios-add' color={Color.lightGrey} size={80}/>
            </View>
        </TouchableOpacity>
     );
}
const styles = StyleSheet.create({
    QuickAdd:{
        width:85,
        height:85,
        backgroundColor:'white',
        borderRadius:45,
        borderWidth:3,
        borderColor:Color.lightGrey,
        alignItems:'center',
        justifyContent:'center'
    }
})
 
export default QuickAdd;