import React, { useEffect, useState, } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, ScrollView, Alert, StyleSheet, TextInput } from 'react-native';
import { IconButton, } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
const getKeysData = async (keys) => {
    const stores = await AsyncStorage.multiGet(keys);
    return stores.map(([key, value]) => (JSON.parse(value)))
}

export default function App({ navigation }) {
    const [liste, setListe] = useState([]);
    const [ara, setAra] = useState("");
    const isFocused = useIsFocused()
    const listeyiDoldur = () => {
        AsyncStorage.getAllKeys().then((keyler) => {
            getKeysData(keyler).then((üyeler) => {
                let sıralanmışÜyeler = üyeler.sort((a, b) => a.isim.localeCompare(b.isim))
                setListe(sıralanmışÜyeler)

            })
        })
    }

    useEffect(() => {
        listeyiDoldur()
    }, [isFocused])


    const filtrele = liste.filter((item) => {
        return item.isim.indexOf(ara) >= 0

    })


    const sil = (üye) => {
        Alert.alert(
            "Silinsin mi?",
            null,
            [
                {
                    text: "İptal",
                    style: "cancel"
                },
                {
                    text: "Evet", onPress: () => {
                        AsyncStorage.removeItem("üye-" + üye.tc).then(() => {
                            Alert.alert("Üye Silindi")
                            listeyiDoldur()
                        })
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (

        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', backgroundColor: '#734124' }}>
                <TextInput style={styles.search} onChangeText={setAra} placeholder="Ara" placeholderTextColor='white' >
    
                </TextInput>
            <IconButton style={styles.arabutonu}  onPress={() => navigation.navigate("YeniÜye")} icon="account-plus"></IconButton>
            
            </View>






            <ScrollView style={{ backgroundColor: '#734124' }}>
                {filtrele.map((üye, i) => {
                    return (

                        <View key={"üye" + i}>

                            <TouchableOpacity onLongPress={() => sil(üye)} key={i} style={styles.input}>

                                <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#CEECF2' }}>{üye.üyeno}</Text>
                                </View>

                    <Text style={styles.yazılar}>İsim: {üye.isim}</Text>
                    <Text style={styles.yazılar}>Soyisim: {üye.soyisim}</Text>
                    <Text style={styles.yazılar}>T.C Numarası: {üye.tc}</Text>
                    <Text style={styles.yazılar}>Cep No: {üye.cep}</Text>
                    <Text style={styles.yazılar}>Email: {üye.mail}</Text>

                            </TouchableOpacity>
                        </View>


                    )
                })}
            </ScrollView>

        </View>



    );
}
const styles = StyleSheet.create({
    input: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#734124',
        borderColor: '#F2BC57',

    },

    yazılar: {
        color: '#D9D9D9',
        fontSize: 16,
    },

    search: {
        borderWidth: 1,
        flex: 1,
        marginVertical: 5,
        padding: 5,
        marginHorizontal: 5,
        borderRadius: 5,
        borderColor: 'black',
        color: '#D9D9D9',
        fontSize: 16,


    },

    arabutonu: {
        borderWidth: 1,
        //flex:1,
        marginVertical: 5,
        padding: 5,
        marginHorizontal: 5,
        borderRadius: 5,
        //borderColor: 'green',
        

    }

})