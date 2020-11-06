import React from 'react';
import {View , Text, StyleSheet,TouchableOpacity} from 'react-native';
import { InputFieldSideTitle } from './InputField';
import { Ionicons } from '@expo/vector-icons'
import colors from '../assets/colors';

const SecretaryLayout = (props) => {


    return (
        <TouchableOpacity activeOpacity={1} onPress={props.onGetID.bind(this, props.id)}>
            <View style={styles.MainView}>
                <Text style={styles.MainText}>Secretary {props.id + 1}</Text>
                <InputFieldSideTitle onFocus={props.onGetID.bind(this, props.id)} value={props.name} onChangeText={props.onChangeName} Title='Name' placeholder='Eg: Mustafa'/>
                <InputFieldSideTitle onFocus={props.onGetID.bind(this, props.id)} value={props.email} onChangeText={props.onChangeEmail} Title='Email' placeholder='Eg: abc@gmail.com' keyboardType='email-address'/>
                <InputFieldSideTitle onFocus={props.onGetID.bind(this, props.id)} value={props.phone} onChangeText={props.onChangePhone} Title='Phone' placeholder='Eg: 1234567890' keyboardType='numeric'/>
            </View> 
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    MainView:{
        borderTopWidth:2,
        borderTopColor:colors.altWhite,
        paddingBottom:15
    },
    MainText:{
        fontSize:18,
        paddingTop:15,
        paddingBottom:15,
    },
})
 
export default SecretaryLayout;