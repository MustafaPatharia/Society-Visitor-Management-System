import React, { useState, useCallback , useEffect} from 'react';
import {ScrollView, View , Text, StyleSheet,Platform, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useSelector , useDispatch} from 'react-redux'
import colors from '../../assets/colors';
import { SocietyView , SecretaryView } from '../../components/viewScreenComponent';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { IconiconsHeaderButton } from '../../components/HeaderButton'
import { updateSociety  , deleteSociety } from '../../store/action/adminAction';
import {Button} from 'react-native-elements'


const ViewSocietyScreen = (props) => {
    
    const DATA = useSelector(state => state.admin.Society)
    const Id = props.navigation.getParam('societyId')
    const selectedSociety = DATA.find(item => item.id === Id)
    const [ Society , setSociety] = useState(selectedSociety)
    const [ edit , setEdit] = useState(false)
    const [Dindex, setDindex] = useState(0)

    const dispatch = useDispatch()

    const DataHandler = ( text , key , type ) => {
        if(type === 'Secretary'){

            const newSecretary = [ ...Society.Secretary ]
            const updateValue = { ...Society.Secretary[Dindex] , [key]:text}
            newSecretary[Dindex]=updateValue
            setSociety({...Society , 'Secretary':newSecretary})
            
            

        }
        else if ( type === 'Society' ){
            
            setSociety({ ...Society , [key]:text})

        }
   }

    const ToggleEditHandler = () =>{        
        setEdit(!edit)
    }

    const updateSocietyHandler = useCallback((updSoc , updId) => {
        dispatch(updateSociety(updSoc , updId))
    })
    

    useEffect(() => {
        props.navigation.setParams({isEdit : edit})
        if(!edit){
            updateSocietyHandler(Society , Society.id)
        }
    },[edit])

    useEffect(() =>{
        props.navigation.setParams({ToggleEdit : ToggleEditHandler})
    },[edit])
   

   

    const OnDeleteHandler = useCallback((delId) => {
        props.navigation.popToTop()
        dispatch(deleteSociety(delId))
        
    })

    return ( 
        <View style={{flex:1, paddingHorizontal:20 , paddingTop:15}}>
        <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={100}>
            <ScrollView>
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={ () => {Keyboard.dismiss()} }>
                        <SocietyView 
                            SocName={Society.name} 
                            SocAddress={Society.address} 
                            SocLocation={Society.location} 
                            SocPin={Society.pincode} 
                            onChangeAddress={text => DataHandler( text , 'address' , 'Society' )}
                            onChangeLocation={text => DataHandler( text , 'location' , 'Society' )}
                            onChangePincode={text => DataHandler( text , 'pincode' , 'Society' )}
                            Editable={edit}
                        />

                        { Society.Secretary ? ( Society.Secretary.map( (item) => ( 
                            <SecretaryView
                                key={item.id}
                                SecId={item.id}
                                SecName={item.name} 
                                SecEmail={item.email} 
                                SecPhone={item.phone}
                                GetId = {id => setDindex(id) }
                                onChangeName={text => DataHandler( text , 'name' , 'Secretary' )}
                                onChangeEmail={text => DataHandler( text , 'email' , 'Secretary' )}
                                onChangePhone={text => DataHandler( text , 'phone' , 'Secretary' )}
                                Editable={edit}
                            /> )
                            )) : 
                        
                            <View style={styles.noSec}>
                                <Text>No Secretary Added</Text>  
                            </View>
                    }

                    </TouchableOpacity>
                    </View>            
            </ScrollView>
        </KeyboardAvoidingView>
        { edit && !Society.Secretary ? 
            <View style={{flexDirection:'row-reverse'}}>
                <Button 
                    title='Add Secretary' 
                    containerStyle={styles.btnViewD1} 
                    buttonStyle={styles.btnAdd} 
                    onPress={() => { 
                        props.navigation.navigate({
                                routeName:'AddSecretary' , 
                                params:{ 
                                    SocietyId : Society.id, 
                                    PrevScreen:'ViewScreen' }}) } } />

                <Button title='Delete Society' 
                    containerStyle={styles.btnViewD2} 
                    buttonStyle={styles.btnDel} 
                    onPress={ () => { OnDeleteHandler(Society.id)} } />

            </View> : 
                <View></View> }
        { edit && Society.Secretary ? 
            <Button title='Delete Society' 
                containerStyle={styles.btnView} 
                buttonStyle={styles.btnDel} 
                onPress={ () => { OnDeleteHandler(Society.id)} } /> : null }
    </View>
        
     );
}




ViewSocietyScreen.navigationOptions = (navigationData) => {
    const societyName = navigationData.navigation.getParam('societyName')
    const isEdit = navigationData.navigation.getParam('isEdit')
    const ToggleEdit = navigationData.navigation.getParam('ToggleEdit')
    

    return{
        headerTitle: societyName,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={IconiconsHeaderButton}>
                <Item 
                title={ isEdit ? 'Done' : 'Edit'}
                iconName = { isEdit ? 'md-thumbs-up' : 'ios-create' }
                onPress = { ToggleEdit }
                />
            </HeaderButtons>
        ) ,
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,

    };
}
const styles = StyleSheet.create({
    noSec:{
        alignItems:'center',
        padding:40
    },
    btnDel:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:colors.red
    },
    btnAdd:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:colors.primaryColor
    },
    btnView:{
        marginVertical:20,
        width:'100%'
    },
    btnViewD1:{
        flex:1,
        marginLeft:10,
        marginVertical:20,
        width:'100%'
    },
    btnViewD2:{
        flex:1,
        marginRight:10,
        marginVertical:20,
        width:'100%'
    },

})
 
export default ViewSocietyScreen;