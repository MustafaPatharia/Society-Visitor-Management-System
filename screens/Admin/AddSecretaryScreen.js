import React, { useState, useCallback } from 'react';
import {ScrollView ,View, StyleSheet,Keyboard, Platform, TouchableOpacity, Alert , KeyboardAvoidingView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import colors from '../../assets/colors.js';
import SecretaryLayout from '../../components/SecretaryAdd.js';
import {useDispatch} from 'react-redux'
import { addSecretary } from '../../store/action/adminAction';
import {Button } from 'react-native-elements'

const AddSecretaryScreen = (props) => {

    const Id = props.navigation.getParam('SocietyId')
    const PrevScreen = props.navigation.getParam('PrevScreen')
    const [Sindex, setSindex] = useState(0)
    const [Dindex, setDindex] = useState(0)
    const [Secretary , setSecretary] = useState([
        {
            id:Sindex,
            name:'',
            email:'',
            phone:''
        }
    ])

    const dispatch = useDispatch();
    const addSecretaryHandler = useCallback((Sec , SocId) => {
        dispatch(addSecretary(Sec , SocId))
    })
    const DataHandler = (text,key) =>{

        newSecretary = [...Secretary]
        updatedValue = {...Secretary[Dindex] , [key]: text}
        newSecretary[Dindex] = updatedValue
        setSecretary(newSecretary)

    }

    const SecretaryAddHandler = () => {
        newSecretary = {
            id:Sindex+1,
            name:'',
            email:'',
            phone:''
        }
        setSecretary([...Secretary , newSecretary])
        setSindex(Sindex+1)
    }

    const CreateSociety = () => {
                       
            

        Secretary.map(item => {
            if (item.name === '' || item.email === '' || item.phone === ''){
                Alert.alert('Field Empty', `Fill the data of Secretary ${item.id + 1}`)
                return
            }
            else{
                if ( Secretary.length-1 === item.id){
                    addSecretaryHandler( Secretary , Id);
                    props.navigation.popToTop();
                   
                }
                
            }
        })




    }

    
    return (
        <View style={styles.Topview}>
            <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={100}>            
                <ScrollView>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { Keyboard.dismiss() }}>
                        { Secretary.map((item,index) => ( 
                            <SecretaryLayout 
                                    key={index}
                                    id={index}
                                    name={item.Name}
                                    email={item.Email}
                                    phone={item.Phone}
                                    onChangeName={(text) =>  DataHandler(text,'name')}
                                    onChangeEmail={(text) => DataHandler(text,'email') }
                                    onChangePhone={(text) => DataHandler(text,'phone') }
                                    onGetID = { id => setDindex(id)}
                                /> 
                        )) 
                        }
                        <View style={styles.line}></View>
                            <TouchableOpacity activeOpacity={0.7} style={styles.Add} onPress={SecretaryAddHandler}>
                                <Ionicons name='ios-add-circle' size={30} color='#436EEE'/>
                            </TouchableOpacity>
                        
                    </TouchableOpacity>
                </ScrollView>
        </KeyboardAvoidingView> 
        { PrevScreen === 'AddSociety' ? 
            <Button containerStyle={styles.btnView} buttonStyle={styles.btn} title='Create Society' onPress={CreateSociety}/> :
            <Button containerStyle={styles.btnView} buttonStyle={styles.btn} title='Add Scretary' onPress={CreateSociety}/>
        } 
    </View>
     );
}
AddSecretaryScreen.navigationOptions = {
    headerTitle:'Add Secretary',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}

const styles = StyleSheet.create({
    Topview:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:15
    },
    btnView:{
        marginVertical:20,
        width:'100%'
    },
    btn:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:colors.Orange
    },
    Add:{
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        height:2,
        width:'90%',
        backgroundColor:colors.altWhite,
        position:'absolute',
        bottom:17
    },
})
 
export default AddSecretaryScreen;