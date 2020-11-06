import React, { useState, useEffect ,useCallback } from 'react';
import {View , Text, StyleSheet, TextInput, Alert, Platform, Picker} from 'react-native';
import colors from '../assets/colors';
import {Button} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import SelectInput from 'react-native-select-input-ios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useDispatch} from 'react-redux'
import {updateEmail} from '../store/action/authAction'


const AdminLoginScreen = (props) => {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [selectedOption , setSelectedOption] = useState('Resident');
  const option = [
    {value: 'Resident' , label:'Resident'},
    {value: 'Watchman' , label:'Watchman'},
    {value: 'Admin' , label:'Admin'}
  ]

  const dispatch = useDispatch()

  const updateHandler = useCallback(( email ) => {
    dispatch(updateEmail(email))
  },[dispatch])


  const verifcation = () => {
    if(Email === '' && Pass === '' ){
      Alert.alert('Incorrect Value', 'Please enter details')
    }
    else{
      switch(selectedOption){
        case 'Admin':
              if (Email === 'P' && Pass === '1' ){
                console.log('verified');
                props.navigation.navigate({routeName:'Admin'})
                return
              }
              else{
              Alert.alert('Invalid User','Please check the details')
              return
              }
        case 'Resident':
            if (Email === 'TroyPattee@gmail.com' && Pass === '1' ){
              props.navigation.navigate({
                routeName:'Resident' 
              })
              updateHandler(Email)
              return
              }
              else{
              Alert.alert('Invalid User','Please check the details')
              return
              }
        case 'Watchman':
            if (Email === 'shamu@gmail.com' && Pass === '1' ){
              props.navigation.navigate({
                routeName:'Watchman' 
              })
              updateHandler(Email)
              return
              }
              else{
              Alert.alert('Invalid User','Please check the details')
              return
              }
        default:
            Alert.alert('Invalid User Default','Please check the details')

        }
    }
    
  }
  
  return ( 
    <View style={{flex:1}}>
        <View style={styles.designView}>
          <View style={styles.lightSegment}></View>
          <View style={styles.darkSegment}></View>
          <Text style={styles.Heading}>Login</Text>
          <View style={styles.PickerViewbg}></View>
          <View style={styles.circleBg}></View>
          { Platform.OS === 'ios' ?           
              <View style={styles.circle}>
                  <Ionicons name='ios-arrow-down' size={24}  color='white' iconStyle={{color:'white'}} backgroundColor='#fff'/>
              </View> : 
          
              <View></View> }

          { Platform.OS === 'ios' ?
            <SelectInput 
                mode='dropdown' 
                labelStyle={styles.PickerInputText} 
                style={styles.PickerView} 
                value={selectedOption} 
                options={ option } 
                onValueChange={value => setSelectedOption(value)}/>
            : 
            <Picker
                mode="dropdown"
                style={styles.PickerViewAndroid}
                selectedValue={selectedOption}
                onValueChange={value => setSelectedOption(value)}>

                <Picker.Item label="Resident" value="Resident" />
                <Picker.Item label="Watchman" value="Watchman" />
                <Picker.Item label="Admin" value="Admin" />
          </Picker>
          }  
          
          </View> 
          
          <View style={{flex:1}}>
          <KeyboardAwareScrollView>
                <View style={styles.View}>
                    <TextInput
                    value={Email}
                    onChangeText={ (text) => setEmail(text)}
                    placeholder='Email'
                    style={styles.Input}
                    />
                    <TextInput
                    style={styles.Input}
                    value={Pass}
                    name='pass'
                    onChangeText={ (text) => setPass(text)}
                    placeholder='Password'
                    type='numeric'
                    />
                    <View style={styles.btnView}>
                      <Button 
                        buttonStyle={styles.loginBtn} 
                        onPress={verifcation} 
                        title='Continue'
                        />
                    </View>
                </View>
                </KeyboardAwareScrollView>
          </View>
    </View>

     );
}

AdminLoginScreen.navigationOptions = {
  headerTitle:'Login',
  header:null
  
}

const styles = StyleSheet.create({
  btnView:{
    marginVertical:20
  },
  loginBtn:{
    width:230,
    height:50,
    backgroundColor:colors.primaryColor,
    borderRadius:30,
  },
  View:{
    padding:15,
    alignItems:'center',
    justifyContent:'center'
  },
  Input:{
    paddingHorizontal:25,
    backgroundColor:'#eee',
    width:'70%',
    height:50,
    borderRadius:25,
    marginBottom:20
  },
  darkSegment:{
    position:'absolute',
    backgroundColor:colors.primaryColor,
    height:256,
    width:'100%',
    transform:[
      {rotate:'-5deg'},
      {translateX:-12},
      {translateY:-24},
      {scaleX:1.2},
      {scaleY:1.1}
    ],
  
  },
  lightSegment:{
    position:'absolute',
    backgroundColor:colors.Orange,
    height:278,
    width:'100%',
    transform:[
      {rotate:'2deg'},
      {scaleX:1.1}
    ]
  },
  Heading:{
    fontSize: 72,
    position:'absolute',
    paddingTop:50,
    fontWeight:'bold',
    color:colors.altWhite,

  },
  designView:{
    flex:1,
    position:'relative',
    alignItems:'center',
  },
  PickerViewbg:{
    position:'absolute',
    height:40,
    top:160,
    width:200,
    borderRadius:20,
    backgroundColor:'white',
    opacity:0.2,
  },
  PickerView:{
    height:40,
    top:160,
    width:200,
    borderRadius:20,
    justifyContent:'center',
    paddingHorizontal:15,
  },
  PickerViewAndroid:{
    width:200,
    height:40,
    paddingHorizontal:15,
    justifyContent:'center',
    top:160,
    marginLeft:5,
    color:'white'
  },
  PickerInputText:{
    color:'white',
    fontSize:16,
    opacity:1
  },
  circle:{
    height:30,
    width:30,
    borderRadius:15,
    top:165,
    right:93,
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:4,

  },
  circleBg:{
    height:30,
    width:30,
    borderRadius:15,
    backgroundColor:'white',
    opacity:0.2,
    top:165,
    right:'24%' ,
    position:'absolute',
    paddingVertical:4,
  },

});

export default AdminLoginScreen;