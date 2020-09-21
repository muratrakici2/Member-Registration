import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export default function App({ navigation }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate("YeniÜye")} style={styles.input}>
                <Text style={styles.yazılar}>Yeni Üye</Text>
            </TouchableOpacity>

            <View><Text></Text></View>
            <View><Text></Text></View>

            <TouchableOpacity onPress={() => navigation.navigate("ÜyeListesi")} style={styles.input}>
                <Text style={styles.yazılar}>Üye Listesi</Text>
            </TouchableOpacity>

        </View>


    );
}