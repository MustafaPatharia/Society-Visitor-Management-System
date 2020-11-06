import React, {useState, useCallback} from 'react';
import { View , ScrollView  , TouchableWithoutFeedback , StyleSheet, Keyboard, Alert, Platform,KeyboardAvoidingView} from 'react-native'
import colors from '../../assets/colors'
import { InputFieldWithTitle } from '../../components/InputField';
import {useDispatch} from 'react-redux'
import { addSociety } from '../../store/action/adminAction';
import {Button} from 'react-native-elements'


const AddSocietyScreen = (props) => {

    var uniqueKeygen = require('unique-keygen');
    const [ Society , setSociety] = useState(
        {
            name:'',
            id:uniqueKeygen(7),
            address:'',
            location:'',
            pincode:''
        }
    )

    const dispatch = useDispatch();
    
    const addSocietyHandler = useCallback(( Soc ) => {
        dispatch(addSociety(Soc))
    },[dispatch])
   

    const AddSociety = () => {

        if (Society.name != '' && Society.address != '' && Society.location != '' && Society.pincode != ''){

            addSocietyHandler(Society)            
            

            props.navigation.navigate({
                routeName: 'AddSecretary',
                params:{
                    SocietyId:Society.id,
                    PrevScreen:'AddSociety'
                }
            }); 
        }
        else{
            Alert.alert('Incomplete Entry','Do not leave the field Empty')
        }
        
    }


    return ( 
        <View style={styles.Topview}>
            <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={100}>
                
                    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <ScrollView>
                        <InputFieldWithTitle 
                        Title='Society Name'
                        value={Society.name}
                        onChangeText={(text) => setSociety({ ...Society , name : text }) }
                        />
                        
                            <InputFieldWithTitle 
                            Title='Address'
                            value={Society.address}
                            onChangeText={(text) => setSociety({...Society, address : text } ) }
                            />
                            <InputFieldWithTitle
                            Title='City'
                            value={Society.city}
                            onChangeText={(text) => setSociety({...Society, location : text }) }
                            />
                        
                        <InputFieldWithTitle 
                        Title='Pincode'
                        value={Society.pincode}
                        onChangeText={(text) => setSociety({...Society, pincode : text } ) }
                        keyboardType='numeric'
                        maxLength={6}
                        />
                        </ScrollView>
                    </TouchableWithoutFeedback>
                
            </KeyboardAvoidingView>
            <Button containerStyle={styles.btnView} buttonStyle={styles.btn} title='Add Secretary' onPress={AddSociety}/>
        </View>        
     );
}

AddSocietyScreen.navigationOptions = {
    headerTitle:'Add Society',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
}
const styles = StyleSheet.create({
    Topview:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
    },
    btnView:{
        marginVertical:20,
    },
    btn:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:colors.primaryColor
    },
})
 
export default AddSocietyScreen;