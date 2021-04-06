import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
        padding: 15px;
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
    InfoArea: styled.View`
    width:100%;
    background-color: #5e2129;
    border-radius: 5px;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    `,
    InfoAreaItens: styled.View`
    width: 160px;
    height: 50px;
    margin:10px;
    flex-direction: row;
    align-items:center;
    `,
    InfoAreaText: styled.View`
    width: 100%;
    height: 100%;
    padding: 5px; 10px;
    `,
    InfoTextName: styled.Text`
    color: #ffffff;
    font-size: 15px;
    `,
    InfoTextValor: styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    `,
    ValorArea: styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: row;
    `,
    ValorAreaText: styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 10px;
    color: #5e2129;
    `,
    ValorContainer: styled.View`
    margin: 0px 10px;
    flex:1;
    border: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
    padding-top:9px;
    padding-bottom:9px;
    border-bottom-color: #5e2129;
    border-bottom-width: 5px;
    `,
    Logo: styled.Image`
        width: 300px;
        height: 200px;
        margin-left: auto;
        margin-bottom: 20px;
        margin-right: auto;
    `,
    Slogan: styled.Text`
    color: #5c5c5c;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
    margin-bottom: 25px;
    margin-left: 75px;
    `

};