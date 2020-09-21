import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text, Alert, AsyncStorage,ScrollView } from 'react-native';


export default function YeniÜye({ submitHandler }) {
    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');
    const [tc, setTc] = useState('');
    const [cep, setCep] = useState('');
    const [mail, setMail] = useState('');
    const [üyeno, setÜyeno] = useState('');

    const changeIsim = (val) => { setIsim(val); };
    const changeSoyisim = (val) => { setSoyisim(val); };
    const changeTc = (val) => { setTc(val); };
    const changeCep = (val) => { setCep(val); };
    const changeMail = (val) => { setMail(val); };
    const changeÜyeno = (val) => { setÜyeno(val); };


    const gönder = () => {
        let data = {
            isim, soyisim, tc, cep, mail,üyeno
        }
        AsyncStorage.setItem("üye-" + tc, JSON.stringify(data)).then(() => { 
            Alert.alert("Üye Eklendi")
            setIsim("")
            setSoyisim("")
            setTc("")
            setCep("")
            setMail("")
            setÜyeno("")
        })

    }

    return (
        <ScrollView style={styles.scroll}>
            <TextInput
                style={styles.input}
                value={isim}
                placeholder='İsim'
                placeholderTextColor={"#27B9F2"}
                onChangeText={changeIsim}
            ></TextInput>

            <TextInput
                style={styles.input}
                value={soyisim}
                placeholder='Soyisim'
                placeholderTextColor={"#27B9F2"}
                onChangeText={changeSoyisim}
            ></TextInput>

            <TextInput
                style={styles.input}
                value={tc}
                placeholder='T.C Numarası'
                placeholderTextColor={"#27B9F2"}
                onChangeText={changeTc}
                keyboardType="number-pad"
            ></TextInput>

            <TextInput
                style={styles.input}
                value={cep}
                placeholder='Cep No'
                placeholderTextColor={"#27B9F2"}
                onChangeText={changeCep}
                keyboardType="number-pad"
            ></TextInput>

            <TextInput
                style={styles.input}
                value={mail}
                placeholder='Email'
                placeholderTextColor={"#27B9F2"}
                onChangeText={changeMail}
                keyboardType="email-address"
            ></TextInput>

            <TextInput
                style={styles.input}
                value={üyeno}
                placeholder='Üye No'
                placeholderTextColor={"#27B9F2"}
                onChangeText={changeÜyeno}
                keyboardType="number-pad"
            ></TextInput>






            <TouchableOpacity style={styles.butontip} onPress={() => gönder()}>
                <Text style={{ fontSize: 20, color: '#0477BF',fontWeight:'bold' }}>KAYDET</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    input: {
        margin:10,
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#F2BC57',
        fontSize:22,



    },
    butontip: {
        margin:30,
        padding:20,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#36D98D',
        borderColor:'#F2BC57',
        alignItems:'center',

    },

    scroll: {

        flex:1,
        backgroundColor: '#734124'
    }
})