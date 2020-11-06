import React from 'react';
import {useSelector} from 'react-redux'
import {ScrollView, View , Dimensions} from 'react-native';
import NoticeMsg from '../../components/NoticeMsg'
import { HeaderButtons , Item } from 'react-navigation-header-buttons'
import { MaterialHeaderButton } from '../../components/HeaderButton'

const NoticeScreen = () => {
    const data = useSelector(state => state.resident.Notices)

    return ( 
        <ScrollView >
            <View style={{flex:1,flexDirection:'column', justifyContent:'flex-end', height:Dimensions.get('screen').height-120}}>
                {
                    data.map( (item,index) => {
                        return(
                            <NoticeMsg 
                                key={index}
                                id={item.id}
                                userProfile={item.profile}
                                Name={item.name.length > 16 ? item.name.slice(0,13)+'...' : item.name}   
                                msg={item.msg}
                            />)
                    })
                }
                
            </View>
        </ScrollView>
     );
}
 
export default NoticeScreen;