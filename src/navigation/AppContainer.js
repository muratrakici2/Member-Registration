import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnaSayfa from '../../sayfalar/Anasayfa'
import YeniÜye from '../../sayfalar/YeniÜye'
import ÜyeListesi from '../../sayfalar/ÜyeListesi'
const Stack = createStackNavigator();
const options = {
    title: null,
    headerStyle: {
        backgroundColor: '#734124',
        shadowColor: 'transparent',

    },
    headerTintColor: 'black',


}
const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ÜyeListesi" >
                <Stack.Screen name="AnaSayfa" component={AnaSayfa} options={options} />
                <Stack.Screen name="YeniÜye" component={YeniÜye} options={options} />
                <Stack.Screen name="ÜyeListesi" component={ÜyeListesi} options={{ ...options, title: "Üye Listesi" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigationContainer;