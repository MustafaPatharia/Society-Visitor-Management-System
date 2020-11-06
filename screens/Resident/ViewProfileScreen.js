import React , {useState, useCallback , useEffect}from 'react';
import {useDispatch} from 'react-redux'
import {Text,View , StyleSheet, Image,ScrollView , Platform,Picker} from 'react-native';
import {InputFieldSideTitle , InputFieldWithTitle } from '../../components/InputField'
import {Button} from 'react-native-elements'
import colors from '../../assets/colors';
import SelectInput from 'react-native-select-input-ios'
import { updateVisitor, deleteVisitor } from '../../store/action/residentAction';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { IconiconsHeaderButton } from '../../components/HeaderButton'



const ViewProfileScreen = (props) => {

    const data = props.navigation.getParam('data')
    const [ Visitor , setVisitor ]  = useState(data[0])
    const type = props.navigation.getParam('type')
    const [edit ,setEdit] = useState(false)
    const option = [
        {value: '1 month' , label:'1 month'},
        {value: '3 month' , label:'3 month'},
        {value: '6 month' , label:'6 month'},
        {value: '12 month' , label:'12 month'}
      ]

    const dispatch = useDispatch()

    const DataHandler = ( text , key , type ) => {
        if(type === 'Visitor'){
            setVisitor({ ...Visitor , [key]:text})           
        }
   }

    const ToggleEditHandler = () =>{        
        setEdit(!edit)
    }

    const updateVisitorHandler = useCallback((updVisitor , updId) => {
        dispatch(updateVisitor(updVisitor , updId))
    })
    

    useEffect(() => {
        props.navigation.setParams({isEdit : edit})
        if(!edit){
            updateVisitorHandler(Visitor , Visitor.id)
        }
    },[edit])

    useEffect(() =>{
        props.navigation.setParams({ToggleEdit : ToggleEditHandler})
    },[edit])

    const OnDeleteHandler = useCallback((delId) => {
        props.navigation.popToTop()
        dispatch(deleteVisitor(delId))
        
    })

    return (
        <View style={styles.MainView}>
            <ScrollView>
                <View style={styles.ImageView}> 
                    <Image style={styles.Image} source={{uri : data[0].profile }}/>
                </View>
                {( type === 'familyMember' || type === 'worker') ? 
                    <View>
                        <InputFieldSideTitle Title='Name' value={data[0].name}  editable={false}/>
                        <InputFieldSideTitle Title='Email' value={data[0].email} editable={false}/>
                        <InputFieldSideTitle Title='Mobile' value={data[0].mobile} editable={false}/>
                        <InputFieldSideTitle Title='Flat' value={data[0].flat} editable={false}/>
                    </View> : null
                }
                {( type === 'visitor') ? 
                    <View>
                        <InputFieldSideTitle 
                            Title='Name' 
                            value={Visitor.name}  
                            editable={edit} 
                            onChangeText={(text) => DataHandler( text , 'name' , 'Visitor')}/>

                        <InputFieldSideTitle 
                            Title='Mobile' 
                            value={Visitor.mobile} 
                            editable={edit}
                            onChangeText={(text) => DataHandler( text , 'mobile' , 'Visitor')}
                            keyboard='numeric' />

                        <InputFieldWithTitle 
                            Title='Resident Address' 
                            value={Visitor.res_address} 
                            editable={edit}
                            onChangeText={(text) => DataHandler( text ,'res_address' , 'Visitor')}/>

                        <Text style={styles.PickerTitle}>Duration</Text>
                        {   Platform.OS === 'ios' ?
                                <SelectInput
                                    mode='dropdown' 
                                    labelStyle={styles.PickerInputText} 
                                    style={styles.PickerView} 
                                    value={Visitor.duration} 
                                    options={ option } 
                                    enabled={edit}
                                    onValueChange={(text) => DataHandler( text ,'duration', 'Visitor')}/> 
                                :
                                <Picker
                                    mode="dropdown"
                                    style={styles.PickerView}
                                    selectedValue={Visitor.duration}
                                    enabled={edit}
                                    onValueChange={(text) => DataHandler( text ,'duration', 'Visitor')}>
                    
                                    <Picker.Item label="1 month" value="1 month" />
                                    <Picker.Item label="3 month" value="3 month" />
                                    <Picker.Item label="6 month" value="6 month" />
                                    <Picker.Item label="12 month" value="12 month" />
                              </Picker>

                            }

                        <InputFieldWithTitle 
                            Title='Aadhaar Card No.' 
                            value={Visitor.aadhar_no} 
                            editable={edit}
                            onChangeText={(text) => DataHandler( text , 'aadhar_no' , 'Visitor')}/>

                    </View> : null
                }        
            </ScrollView>        
            { type === 'visitor' && edit ?
            
                <Button 
                    containerStyle={styles.btnView}
                    buttonStyle={styles.btn}
                    title='Delete Visitor'
                    onPress={() => { OnDeleteHandler(Visitor.id) } } />
             : null }
        </View>
        
    );
}
const styles = StyleSheet.create({
    MainView:{
        flex:1,
        paddingHorizontal:15
    },
    ImageView:{
        width:'100%',
        height:250,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
        
    },
    Image:{
        width:250,
        height:250,
        borderRadius:125,
        borderWidth:3,
        borderColor:colors.lightGrey
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
    btn:{
        backgroundColor:colors.red,
        width:'100%',
        borderRadius:10,
        height:50,
    },
    btnView:{
        paddingVertical:15,
        width:'100%',
    }
})

ViewProfileScreen.navigationOptions = (navigationData) => {
    const data = navigationData.navigation.getParam('data')
    const isEdit = navigationData.navigation.getParam('isEdit')
    const ToggleEdit = navigationData.navigation.getParam('ToggleEdit') 
    const type = navigationData.navigation.getParam('type')   

    return{
        headerTitle: data[0].name,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={IconiconsHeaderButton}>
                { type === 'visitor' ?
                <Item 
                title={ isEdit ? 'Done' : 'Edit'}
                iconName = {isEdit ? 'md-thumbs-up' : 'ios-create'}
                onPress = { ToggleEdit }
                /> : null }
            </HeaderButtons>
        ) ,
    };
}

export default ViewProfileScreen;