import React, {useState, useCallback, useEffect} from 'react';
import { Text, View , ScrollView  , TouchableWithoutFeedback , StyleSheet, Keyboard, Alert, Platform,KeyboardAvoidingView, Picker} from 'react-native'
import colors from '../../assets/colors'
import SelectInput from 'react-native-select-input-ios'
import { InputFieldWithTitle} from '../../components/InputField';
import {useDispatch, useSelector} from 'react-redux'
import { addVisitor } from '../../store/action/residentAction'
import {Button} from 'react-native-elements'


const AddVisitorScreen = (props) => {
    const edit = true
    var uniqueKeygen = require('unique-keygen');
    const [ Visitor , setVisitor] = useState(
        {
            id:uniqueKeygen(7),
            name:'',
            res_address:'',
            mobile:'',
            duration:'Select',
            aadhar_no:'',
            profile:'https://i.ibb.co/8Y4tL9k/man.png'
        }
    )

    const option = [
        {value: '1 month' , label:'1 month'},
        {value: '3 month' , label:'3 month'},
        {value: '6 month' , label:'6 month'},
        {value: '12 month' , label:'12 month'}
      ]

    const dispatch = useDispatch();
    
    const addVisitorHandler = useCallback(( visitor ) => {
        dispatch(addVisitor(visitor))
    },[dispatch])
   

    const AddVisitor = () => {

        if (Visitor.name != '' && Visitor.res_address != '' && Visitor.mobile != '' && Visitor.duration != ''){

            addVisitorHandler(Visitor)
            props.navigation.goBack() 
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
                        Title='Name'
                        value={Visitor.name}
                        onChangeText={(text) => setVisitor({ ...Visitor , name : text }) }
                        editable={edit}
                        />
                        
                        <InputFieldWithTitle 
                        Title='Resident Address'
                        value={Visitor.address}
                        onChangeText={(text) => setVisitor({...Visitor, res_address : text } ) }
                        editable={edit}
                        />

                        <InputFieldWithTitle
                        Title='Mobile'
                        value={Visitor.mobile}
                        onChangeText={(text) => setVisitor({...Visitor, mobile : text }) }
                        keyboardType='numeric'
                        maxLength={10}
                        editable={edit}
                        />

                        <Text style={styles.PickerTitle}>Duration</Text>
                        {   Platform.OS === 'ios' ?
                                <SelectInput
                                    mode='dropdown' 
                                    labelStyle={styles.PickerInputText} 
                                    style={styles.PickerView} 
                                    value={Visitor.duration} 
                                    options={ option } 
                                    onValueChange={value => setVisitor({ ...Visitor, duration : value})}/> 
                                :
                                <Picker
                                    mode="dropdown"
                                    style={styles.PickerView}
                                    selectedValue={Visitor.duration}
                                    onValueChange={value => setVisitor({ ...Visitor, duration : value})}>
                    
                                    <Picker.Item label="1 month" value="1 month" />
                                    <Picker.Item label="3 month" value="3 month" />
                                    <Picker.Item label="6 month" value="6 month" />
                                    <Picker.Item label="12 month" value="12 month" />
                              </Picker>

                            }
                        <InputFieldWithTitle 
                        Title='Aadhar Card No. ( optional )'
                        value={Visitor.aadhar_no}
                        onChangeText={(text) => setVisitor({...Visitor, aadhar_no : text } ) }
                        editable={edit}
                        />

                        </ScrollView>
                    </TouchableWithoutFeedback>
                
            </KeyboardAvoidingView> 
                <Button 
                    containerStyle={styles.btnView}
                    buttonStyle={styles.btn}
                    title='Add Visitor'
                    onPress={AddVisitor} />
        </View>        
     );
}

AddVisitorScreen.navigationOptions = {
    headerTitle:'Add Visitor',
}

const styles = StyleSheet.create({
    Topview:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
    },
    Button:{
        justifyContent:'flex-end',
        borderRadius:10,
        marginBottom:20,
    },
    PickerView:{
        height:45,
        width:'100%',
        backgroundColor:colors.altWhite,
        justifyContent:'center',
        padding:10,
        borderRadius:10,
        marginBottom:5,
    },
    PickerInputText:{
        fontSize:14,
    },
    PickerTitle:{
        fontSize:18,
        marginVertical:15
    },
    btnView:{
        marginVertical:10,
        width:'100%'
    },
    btn:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:colors.primaryColor
    },
})
 
export default AddVisitorScreen;