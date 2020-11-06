import React , {useState, useCallback , useEffect}from 'react';
import {useSelector} from 'react-redux'
import {Text,View , StyleSheet, Image,ScrollView} from 'react-native';
import {InputFieldSideTitle} from '../../components/InputField'
import colors from '../../assets/colors';
import {Button} from 'react-native-elements'



const ViewProfileScreen = (props) => {

    const userId = props.navigation.getParam('id')
    const data = useSelector(state => state.resident.Users)
    const user = data.filter( item => { return item.id === userId } )

    useEffect( () => {
        props.navigation.setParams({name:user[0].name})
    },[])
    
    
    return (
        <View style={{flex:1}}>
        <ScrollView>
            <View style={styles.MainView}>
                <View style={styles.ImageView}> 
                    <Image style={styles.Image} source={{uri : user[0].profile }}/>
                </View>
                <View>
                    <InputFieldSideTitle Title='Name' value={user[0].name}  editable={false}/>
                    <InputFieldSideTitle Title='Email' value={user[0].email} editable={false}/>
                    <InputFieldSideTitle Title='Mobile' value={user[0].mobile} editable={false}/>
                    <InputFieldSideTitle Title='Flat' value={user[0].flat} editable={false}/>
                </View>                
            </View>
        </ScrollView>
                
            <Button 
                containerStyle={styles.btnView}
                buttonStyle={styles.requestBtn} 
                iosBtnText='white' btnColor={colors.Orange } 
                title='Request Visitor'
                onPress={ () => props.navigation.navigate({
                    routeName:'RequestVisitor',
                    params:{
                        flatNo:user[0].flat
                    }
                })}
                />   

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
    btnView:{
        width:'100%',
        alignItems:'center',
        marginVertical:6,

    },
    requestBtn:{
        backgroundColor:colors.Orange,
        borderRadius:10,
        height:50,
        width:'90%',
        
    }
})

ViewProfileScreen.navigationOptions = (navigationData) => {
    const name = navigationData.navigation.getParam('name')

    return{
        headerTitle: name
    };
}

export default ViewProfileScreen;