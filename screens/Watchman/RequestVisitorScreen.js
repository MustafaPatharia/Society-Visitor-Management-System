import React , {useState, useCallback} from 'react';
import {View , Text, StyleSheet, Alert,Platform} from 'react-native';
import Color from '../../assets/colors'
import { SearchBar } from 'react-native-elements';
import { InputFieldWithTitle } from '../../components/InputField'
import colors from '../../assets/colors';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux'
import { visitorRequest } from '../../store/action/residentAction'

const RequestVisitorScreen = (props) => {
    var uniqueKeygen = require('unique-keygen');
    const address = props.navigation.getParam('flatNo')
    const [Visitor , setVisitor] = useState({
        id:uniqueKeygen(7),
        name:'',
        mobile:'',
        email:'',
        res_address:address,
        msg:'has request to visit',
        status:'',
        time:'17:39',
        duration:'24 hours',
        date:'12-5-19'
    })

    const DataHandler = (text , key ) => {
        setVisitor({ ...Visitor , [key] : text })
    }

    const dispatch = useDispatch();
    
    const RequestHandlerDispatch = useCallback(( visitor ) => {
        dispatch(visitorRequest(visitor))
    },[dispatch])
    
    const RequestHandler = () => {
        if ( Visitor.name != '' && Visitor.mobile != '' && Visitor.email != '' ){
            RequestHandlerDispatch(Visitor)
            props.navigation.goBack()
        }
        else{
            Alert.alert('Invalid Request','Please fill the data')
        }
    }


    return (
        <View style={styles.modal}>
            <Text style={styles.MainText}>Request Visitor</Text>
            <View style={styles.innerModal}>
                <View style={styles.barView}>
                    <SearchBar
                        containerStyle={{borderRadius:10, marginVertical:Platform.OS === 'android' ? 5 : 0 }}
                        inputContainerStyle={{height:25}}
                        platform={Platform.OS == 'ios' ? 'ios' : 'android' } 
                        placeholder='Search'
                        />
                </View>
                <View style={{position:'relative', alignItems:'center'}}>
                    <View style={styles.line}></View>
                    <Text style={styles.lineText}>OR</Text>
                </View>
                
                <View style={styles.inputView}>
                    <InputFieldWithTitle 
                        Title='Name'
                        value={Visitor.name}
                        onChangeText={ text => DataHandler(text , 'name')} 
                        />
                    <InputFieldWithTitle 
                        Title='Phone'
                        value={Visitor.mobile}
                        onChangeText={ text => DataHandler(text , 'mobile')}
                        />
                    <InputFieldWithTitle 
                        Title='Email'
                        value={Visitor.email}
                        onChangeText={ text => DataHandler(text , 'email')}
                        />
                </View>
                <Button buttonStyle={styles.saveBtn} title='Save and Request' onPress={ RequestHandler }/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    modal:{
        marginTop:'10%',
        marginHorizontal:20,
        alignItems:'center',
        backgroundColor:colors.Orange,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    MainText:{
        color:'white',
        fontSize:25,
        paddingVertical:10
    },
    innerModal:{
        width:'100%',
        paddingTop:10,
        backgroundColor:'#f5f5f5',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    barView:{
        paddingHorizontal: 10,
    },
    line:{
        marginVertical:7,
        height:2,
        backgroundColor:colors.lightGrey,
        width:'100%'
    },
    lineText:{
        paddingHorizontal:5,
        fontSize:15,
        position:'absolute',
        backgroundColor:'#f5f5f5'
    },
    inputView:{
        paddingHorizontal:15
    },
    saveBtn:{
        backgroundColor:'#00c853',
        borderRadius:0,
        marginTop:15,
        height:50,
        borderRadius:10
    }

})
export default RequestVisitorScreen;