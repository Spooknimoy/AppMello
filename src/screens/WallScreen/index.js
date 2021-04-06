import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { Text } from 'react-native';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import WallItem from '../../components/WallItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [wallList, setWallList] = useState([]);

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Inicio'
        });
        getWall();
    }, []);

    const getWall = async () => {
        setWallList([]);
        setLoading(true);
        const result = await api.getWall();
        setLoading(false);
        if(result.error === '') {
            setWallList(result.list);
        } else {
            alert(result.error);
        }
    }

    return (
        <C.Container>
            <C.Logo
                source={require('../../assets/adv2.png')}
                resizeMode="contain"
            />
            <C.Slogan>Aplicativo - WEBCONJU</C.Slogan>
        </C.Container>
    );
}