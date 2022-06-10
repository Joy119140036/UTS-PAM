import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './layar/menu';
import Detail from './layar/pesan1';
import Confirm from './layar/validasi';
import Order from './layar/pesan2';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Confirm" component={Confirm} />
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    );
};

export default ScreenStack;