import React from 'react';
import colors from '../assets/colors'
import { View , StyleSheet ,Text} from 'react-native'
import {InputFieldSideTitle} from './InputField';


export const SocietyView = (props) => {
    return(
        <View style={styles.SocView}>
            <InputFieldSideTitle Title='Address' value={props.SocAddress} editable={props.Editable} onChangeText = {props.onChangeAddress}/>
            <InputFieldSideTitle Title='City' value={props.SocLocation} editable={props.Editable} onChangeText = {props.onChangeLocation}/>
            <InputFieldSideTitle Title='Pincode' value={props.SocPin} editable={props.Editable} onChangeText = {props.onChangePincode} keyboard='numeric'/> 
        </View>
    )
}

export const SecretaryView = (props) => {
    return(
        <View style={styles.SecretaryView}>
            <Text style={styles.SecText}> Secretary {props.SecId + 1}</Text>
            <InputFieldSideTitle Title='Name' value={props.SecName} onFocus={props.GetId.bind(this, props.SecId)} editable={props.Editable} onChangeText = {props.onChangeName}/>
            <InputFieldSideTitle Title='Email' value={props.SecEmail} onFocus={props.GetId.bind(this, props.SecId)} editable={props.Editable} onChangeText = {props.onChangeEmail}/>
            <InputFieldSideTitle Title='Phone' value={props.SecPhone} onFocus={props.GetId.bind(this, props.SecId)} editable={props.Editable} onChangeText = {props.onchangePhone} keyboard='numeric'/> 
        </View>
        )
}
const styles = StyleSheet.create({
    SecretaryView:{
        borderTopWidth:2,
        borderTopColor:colors.altWhite,
        paddingBottom:15
    },
    SecText:{
        paddingVertical:10,
        fontSize:20
    },
    SocView:{
        paddingBottom:10
    },
})