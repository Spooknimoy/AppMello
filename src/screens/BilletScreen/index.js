import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import DocItem from '../../components/DocItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [docList, setDocList] = useState([]);

    

    const handleButton = () => {
        navigation.goBack();
    }

    return (
        <C.Container>
            <C.Scroller contentContainerStyle={{paddingBottom: 40}}>
                <C.ContainerMenu>
                    <C.ContainerMenuItems style={{flexDirection: 'row'}}>
                        <C.ButtonArea onPress={handleButton}>
                            <Icon
                                name='chevron-left'
                                size={25}   
                                color='#fff'
                            />
                        </C.ButtonArea>
                        <C.ContainerMenuItemsTitle style={{marginLeft: 60, fontSize: 20}}>
                            Extrato Contrato
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    
                </C.ContainerMenu>  

                <C.ContainerMenu style={{backgroundColor: '#eef0f6', alignItems: 'flex-start'}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize:20}}>Dados do Contrato</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                   
                    
                </C.ContainerMenu>

              

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'flex-start', flexDirection: 'column', flex: 1}}>
                    <C.ContainerMenuItems style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>N° / Ano Contrato</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>2001/2018</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                        <C.ContainerMenuItems style={{alignItems: 'flex-end'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>N° do Processo</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>2001</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Código Identificação</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>NE2001</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                        <C.ContainerMenuItems style={{alignItems: 'flex-end'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Status</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>Em execução</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'flex-start', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Tipo Objeto</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>Fornecimento</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'flex-start', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Descrição do Objeto</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>(FORNECIMENTO)</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>Constitui objeto desde contrato a contratação para fornecimento de material médico hospitalar para utilização no Complexo Hospital de Clínicas da UFPR.</C.ContainerMenuItemsTitle>

                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Data Assinatura</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>08/10/2018</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                        <C.ContainerMenuItems style={{alignItems: 'flex-end'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Data da Publicação</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>08/10/2018</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Inicio Vigência</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>08/10/2018</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                        <C.ContainerMenuItems style={{alignItems: 'flex-end'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Final Vigência</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>08/10/2019</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'flex-start', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Final Vigência Atualizado</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>08/10/2019</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>

                    <C.ContainerMenuItems style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                        <C.ContainerMenuItems style={{alignItems: 'flex-start'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Forma Pagamento</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>A Prazo</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                        <C.ContainerMenuItems style={{alignItems: 'flex-end'}}>
                            <C.ContainerMenuItemsTitle style={{color: '#3fa5fb', fontSize: 16}}>Valor</C.ContainerMenuItemsTitle>
                            <C.ContainerMenuItemsTitle style={{color: '#bfbfbf'}}>R$ 74.292,50</C.ContainerMenuItemsTitle>
                        </C.ContainerMenuItems>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>
            </C.Scroller>
        </C.Container>
    );
}