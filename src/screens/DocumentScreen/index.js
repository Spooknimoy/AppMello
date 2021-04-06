import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

import DocItem from '../../components/DocItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [docList, setDocList] = useState([]);

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Diligências'
        });
        getDocs();
    }, []);

    const getDocs = async () => {
        setDocList([]);
        setLoading(true);
        const result = await api.getDocs();
        setLoading(false);
        if(result.error === '') {
            setDocList(result.list);
        } else {
            alert(result.error);
        }
    }

    const handleButton = () => {
        navigation.navigate('BilletScreen');
    }

    return (
        <C.Container>
            <C.Scroller contentContainerStyle={{paddingBottom: 40}}>
                <C.ContainerMenu>
                    <C.ContainerMenuItems>
                        <Icon
                            name='calendar'
                            size={25}   
                            color='#fff'
                        />
                        <C.ContainerMenuItemsTitle>
                            AGENDA
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <Icon
                            name='align-justify'
                            size={25}   
                            color='#fff'
                        />
                        <C.ContainerMenuItemsTitle>
                            CONTRATOS
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <Icon
                            name='qrcode'
                            size={25}   
                            color='#fff'
                        />
                        <C.ContainerMenuItemsTitle>
                            QR CODE
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>  

                <C.ContainerMenu style={{backgroundColor: '#eef0f6', alignItems: 'center'}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129'}}>Acompanhar processo</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                   
                    <C.ContainerMenuItems>
                    <C.ContainerMenuItemsTitle style={{color: '#5e2129'}}>Ref: NBU6677</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#5e2129', justifyContent: 'center'}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Verificar o status do processo</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'flex-start', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Acompanhamentos</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Processo: 123456A</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Localização:</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Fórum de Vila Velha - Rua Doutor... </C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>* SOMENTE PARA ASSINANTES</C.ContainerMenuItemsTitle>
                        {/* <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Diária</C.ContainerMenuItemsTitle> */}
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Data:</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>14 janeiro 2019</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:130}}>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Status:</C.ContainerMenuItemsTitle>
                        <Icon
                            name='thumbs-down'
                            size={40}   
                            color='red'
                        />
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Não Resgatado</C.ContainerMenuItemsTitle>
                        <C.ButtonArea style={{marginTop: 100}}  onPress={handleButton}>
                            <C.ButtonText>RESGATAR</C.ButtonText>
                        </C.ButtonArea>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'flex-start', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Acompanhamentos:</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Processo: 123456C</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Localização:</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Fórum de Vila Velha - Rua Doutor..</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>* SOMENTE PARA ASSINANTES</C.ContainerMenuItemsTitle>
                        {/* <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Diária</C.ContainerMenuItemsTitle> */}
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Data:</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>14 fevereiro 2020</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:130}}>
                        <C.ContainerMenuItemsTitle style={{color: '#5e2129', fontSize: 16}}>Status:</C.ContainerMenuItemsTitle>
                        <Icon
                            name='thumbs-up'
                            size={40}   
                            color='green'
                        />
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>Resgatado</C.ContainerMenuItemsTitle>
                        <C.ButtonArea style={{marginTop: 100}} onPress={handleButton}>
                            <C.ButtonText>RESGATAR</C.ButtonText>
                        </C.ButtonArea>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>
                

                
                
            </C.Scroller>
        </C.Container>
    );
}