import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        
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
    List: styled.FlatList`
        flex: 1;
    `,
    ContainerMenu: styled.View`
        flex:1;
        flex-direction:row;
        padding:10px 30px;
        background-color: #5e2129;
        
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
    ButtonArea: styled.TouchableOpacity`
        background-color: #5e2129;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 15px;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
    `
};