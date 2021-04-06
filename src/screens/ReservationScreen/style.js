import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,
    Scroller: styled.ScrollView`
        flex: 1;
        
    `,
    LoadingIcon: styled.ActivityIndicator``,
    NoListArea: styled.View`
        justify-content: center;
        align-items: center;
        padding: 30px;
    `,
    NoListText: styled.Text`
        font-size: 15px;
        color: #000;
    `,
    Title: styled.Text`
        font-size: 17px;
        margin: 10px 0;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #8863E6;
        padding: 12px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
    `,
    ContainerMenu: styled.View`
        flex:1;
        flex-direction:row;
        padding:10px 30px;
        background-color: #3fa5fb;
        
        justify-content: space-between;
    `,
    ContainerMenuItems: styled.View`
        justify-content: center;
        align-items: center;
    `,
    ContainerMenuItemsTitle: styled.Text`
        margin-top: 10px;
        font-weight: bold;
        color: #fff;
        font-size:15px;

    `,
    
};