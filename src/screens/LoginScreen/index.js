import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import Info from '../../assets/info.svg';
export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButton = async () => {
        if(cpf && password) {
            let result = await api.login(cpf, password);
            if(result.error === '') {
                dispatch({type: 'setToken', payload: {token: result.token}});
                dispatch({type: 'setUser', payload: {user: result.user}});

                navigation.reset({
                    index: 1,
                    routes:[{name: 'MainDrawer'}]
                });
            } else {
                alert(result.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleRegisterButton = () => {
        navigation.navigate('RegisterScreen');
    }

    return (
        <C.Container>
            <C.Logo
                source={require('../../assets/adv2.png')}
                resizeMode="contain"
            />
            <C.Slogan>Aplicativo - WEBCONJU</C.Slogan>

            <C.Field
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />
            <C.Field
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={t=>setPassword(t)}
            />

            <C.ButtonArea onPress={handleLoginButton}>
                <C.ButtonText>ENTRAR</C.ButtonText>
            </C.ButtonArea>

            <C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>CADASTRAR-SE</C.ButtonText>
            </C.ButtonArea>
            <C.Information>
                <C.Info
                source={require('../../assets/infoverde.png')}
                resizeMode="contain"
                />
                <C.InformationText>Conheça nosso escritório.</C.InformationText>
            </C.Information>
        </C.Container>
    );
}