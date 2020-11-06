import React from 'react';
import {View , Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import colors from '../assets/colors';

export const InputField = (props) => {
    return ( 

        <View style={{...props.style , ...styles.Input }}>
            <TextInput {...props}/>
        </View>
     );
}

export const InputFieldWithTitle = (props) => {
    return ( 
        <View style={styles.View2}>
            <Text style={styles.Title}>{props.Title}</Text>
            <InputField {...props} />
        </View>
     );
}

export const InputFieldSideTitle = (props) => {
    return ( 
        <View style={styles.SideInputView}>
            <Text style={styles.SideTitle}>{props.Title}</Text>
            <View style={styles.SideInput}>
            <TextInput {...props} />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({

    Input:{
        height:45,
        width:'100%',
        backgroundColor:colors.altWhite,
        justifyContent:'center',
        padding:10,
        borderRadius:10,
        marginBottom:5,
    },
    Title:{
        fontSize:18,
        marginTop:15,
        paddingBottom:15,
    },
    View:{
        width:'100%',
    },
    SideInput:{
        height:45,
        width:'75%',
        backgroundColor:colors.altWhite,
        justifyContent:'center',
        padding:10,
        borderRadius:10,
        marginBottom:5,
        marginLeft:10
    },
    SideTitle:{
        width:'20%',
        fontSize:18,
        paddingTop:10,
        
    },
    SideInputView:{
        flexDirection:'row',
        marginTop:15,
    }
})
 
export default InputFieldWithTitle;