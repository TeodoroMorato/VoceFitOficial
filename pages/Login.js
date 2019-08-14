import React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Image } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
    function login(){
        console.log('Fazer login com usuário e senha');
    }

    function loginFb(){
        console.log('Fazer login usando o SSO do Facebook');
    }

    function forgetSenha(){
        console.log('Esqueci minha senha');
    }

    function cadastrar(){
        console.log('Cadastrar um novo usuário');
    }

    
    return (
        // <ImageBackground source={login} style={{width: '100%', height: '100%'}} >
            <View style={style.container}>
               <Image source={logo} style={{width: 64, height: 64 }} />
                <Text style={style.titulo}>Seja bem-vindo{"\n"}ao VocêFit</Text>
                <TextInput
                    style={style.input}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={style.input}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                />
                
                <TouchableOpacity onPress={forgetSenha}>
                    <Text style={style.forgetPass}>Esqueci minha senha</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.btn} onPress={login}>
                    <Text style={style.btnText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={cadastrar}>
                    <Text style={style.cadLink}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.fbLogin} onPress={loginFb}>
                    <Text style={style.fbLoginText}>Entrar com Facebook</Text>
                </TouchableOpacity>

            </View>
        // </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#FED56E'
    },
    titulo: {
        fontFamily: "Open Sans",
        fontSize: 32,
        color: 'white'
    },
    input: {
        height: 60,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        color: 'white',
        marginTop: 20,
        alignSelf: 'stretch'
    },
    btn: {
        height: 50,
        marginTop: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'stretch',
    },
    btnText: {
        color: '#FF8A00',
        fontSize: 14,
        fontWeight: 'bold',
    },
    forgetPass: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 10,
        alignSelf: 'flex-end'
    },
    cadLink: {
        alignSelf: 'center',
        color: 'white',
        marginTop: 10
    },
    fbLogin: {
        height: 50,
        marginTop: 20,
        backgroundColor: '#507CC0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'stretch',
    },
    fbLoginText: {
        color: 'white',

    }
})