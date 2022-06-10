import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView,View, ScrollView, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';


const menu = ({navigation}) => {  
    const [text, inputText] = useState({ 
        kb: '',
        kd: '', 
        kl: '', 
        tgl: '', 
        wkt: '',
    });

    const onSubmit = () => {
        navigation.navigate('Detail', { text }
    )
    } 

    const [listData, setlistData] = useState(text);



    const getInput = (userInput) => {
        return (val) => {
            inputText({ ...text, [userInput]: val });
    }
    }
  
 
    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#e6e6e6" />
        <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.main}>
                <Text style={styles.title}>Kapalzy</Text>
                  <Text style={styles.titleForm}>Pelabuhan Awal</Text>
                    <View style={styles.search}>
                    <Icon name="ship" size={22} color='grey'/>
                    <TextInput
                    style={styles.input}
                    placeholder="Isi Pelabuhan Keberangkatan"
                    onChangeText={getInput('kb')}
                    value={text.kb}
                    />

                    </View>   
                    
                    
                    <Text style={styles.titleForm}>Pelabuhan Tujuan</Text>
                    <View style={styles.search}>
                        <Icon name="ship" size={22} color='grey' />
                        <TextInput
                        style={styles.input}
                        placeholder="Isi Pelabuhan Tujuan"
                        onChangeText={getInput('kd')}
                        value={text.kd}
                        />
                    </View>
                    
                    
                    <Text style={styles.titleForm}>Kelas Layanan</Text>
                    <View style={styles.search}>
                        <Icon1 name="person" size={22} color='grey' />

                        <TextInput
                        style={styles.input}
                        placeholder="Isi Layanan"
                        onChangeText={getInput('kl')}
                        value={text.kl}
                        />
                    </View>  

                    <Text style={styles.titleForm}>Tanggal Masuk Pelabuhan</Text>
                    
                    
                    <View style={styles.search}>
                        <Icon1 name="date-range" size={22} color='grey' />
                        <TextInput
                        style={styles.input}
                        placeholder="Isi Tanggal Masuk"
                        onChangeText={getInput('tgl')}
                        value={text.tgl}
                        />
                    </View>


                    <Text style={styles.titleForm}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.search}>
                        <Icon1 name="access-time" size={22} color='grey' />
                        <TextInput

                        style={styles.input}
                        placeholder="Isi Jam Masuk"
                        onChangeText={getInput('wkt')}
                        value={text.wkt}
                        />
                    </View>


                    <Text></Text>
                    <View style={styles.inputPerson}>
                        <View style={styles.detail_style}>
                            <Text style={styles.textPerson}>
                                Dewasa
                            </Text>
                            <Text style={styles.textPerson}>
                                1 Orang
                            </Text>
                        </View>
                    </View>          
                    
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSubmit}>


                        <Text style={styles.buttonText}><Icon style={styles.searchicon} name="search" size={15} color='#ffffff'/>Cari</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBar}>
                    <View style={styles.navbar}>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="home" size={28} color='blue'/>
                            <Text style={styles.buttonbarText}>Beranda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Order', {listData})}>
                            <Icon name="book" size={28} color='blue'/>
                            <Text style={styles.buttonbarText}>Pesanan Saya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="ban" size={28} color='blue'/>
                            <Text style={styles.buttonbarText}>Pembatalan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonbottomBar}
                            onPress= {() => navigation.navigate('Home')}>
                            <Icon name="grip-lines" size={28} color='blue'/>
                            <Text style={styles.buttonbarText}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#e6e6e6',
    },
    title: {
        color: '#00579C',
        fontSize: 52,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 21,
        paddingBottom: 21    
    },
    main: {
        margin: 30,  
        marginTop: 52,  
        backgroundColor: '#ffffff',
        paddingVertical: 21,
        paddingHorizontal: 12,
        marginVertical: 0,
        shadowColor: "#bababa",
        shadowOpacity: 10,
        shadowRadius: 5,
    },
    search: {
        marginLeft:16,    
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
        paddingBottom: 22,
    },
    titleForm: {
        marginLeft: 11,
        marginBottom: 6,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'grey',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
       
        marginHorizontal: 11,
        paddingHorizontal: 11,
        paddingVertical: 6,
        height: 40,
        width: 250,
        flex: 1,
    },
    inputPerson: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
       
        marginHorizontal: 10,
        paddingHorizontal: 10,
        // height: 5,
        flex: 1,
        marginBottom: 15
    },
    textPerson: {
        textAlign: 'center',
        paddingTop: 5,
    },
    searchicon: {
        paddingRight: 5
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        marginHorizontal: 50,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbottomBar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: 'grey',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
});

export default menu;