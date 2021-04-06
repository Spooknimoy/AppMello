import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReservationItem from '../../components/ReservationItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Contratos'
        });
        getReservations();
    }, []);

    const getReservations = async () => {
        setList([]);
        setLoading(true);
        const result = await api.getReservations();
        setLoading(false);
        if(result.error === '') {
            setList(result.list);
        } else {
            alert(result.error);
        }
    }

    return (
        <C.Container>
            <C.Scroller contentContainerStyle={{paddingBottom: 40}}>
                <C.ContainerMenu>
                    <C.ContainerMenuItems>
                        <Icon
                            name='file'
                            size={25}   
                            color='#fff'
                        />
                        <C.ContainerMenuItemsTitle>
                            TODOS
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <Icon
                            name='file'
                            size={25}   
                            color='#fff'
                        />
                        <C.ContainerMenuItemsTitle>
                            VIGENTES
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <Icon
                            name='file'
                            size={25}   
                            color='#fff'
                        />
                        <C.ContainerMenuItemsTitle>
                            VENCIDOS
                        </C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>  

                <C.ContainerMenu style={{backgroundColor: '#eef0f6', alignItems: 'center'}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Contrato</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>TipoObjeto e Saldo</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                    <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Visualizar</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>2001 / 2018</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Fornecimento</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>R$ 92.292,50</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:75}}>
                        <Icon
                            name='eye'
                            size={25}   
                            color='#2699fb'
                        />
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>2002 / 2018</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Obras</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>R$ 2.000.000,00</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:75}}>
                        <Icon
                            name='eye'
                            size={25}   
                            color='#2699fb'
                        />
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>2004 / 2018</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Serviço</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>R$ 632.610,00</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:75}}>
                        <Icon
                            name='eye'
                            size={25}   
                            color='#2699fb'
                        />
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>2001 / 2018</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Serviço Continuado</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>R$ 300.000,00</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:75}}>
                        <Icon
                            name='eye'
                            size={25}   
                            color='#2699fb'
                        />
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>2007 / 2018</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Fornecimento</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>R$ 12.400,00</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:75}}>
                        <Icon
                            name='eye'
                            size={25}   
                            color='#2699fb'
                        />
                    </C.ContainerMenuItems>
                </C.ContainerMenu>

                <C.ContainerMenu style={{backgroundColor: '#F5F6FA', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>2008 / 2018</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems>
                        <C.ContainerMenuItemsTitle style={{color: '#3fa5fb'}}>Serviço</C.ContainerMenuItemsTitle>
                        <C.ContainerMenuItemsTitle style={{color: '#ccc'}}>R$ 780.000,00</C.ContainerMenuItemsTitle>
                    </C.ContainerMenuItems>
                    <C.ContainerMenuItems style={{width:75}}>
                        <Icon
                            name='eye'
                            size={25}   
                            color='#2699fb'
                        />
                    </C.ContainerMenuItems>
                </C.ContainerMenu>
                
            </C.Scroller>
        </C.Container>
    );
}