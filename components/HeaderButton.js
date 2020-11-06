import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons , MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native'
import colors from '../assets/colors';

export const IconiconsHeaderButton = props => {
    return ( 
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={Platform.OS === 'android' ? 'white' : colors.primaryColor}></HeaderButton>
     );
}
 
export const MaterialHeaderButton = props => {
    return ( 
        <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={25} color={Platform.OS === 'android' ? 'white' : colors.primaryColor}></HeaderButton>
     );
}
