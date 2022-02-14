import styled from 'styled-components'

const Box = styled.div`
background: #FFFFFF;
border-radius: 8px;
padding: 16px;

.li:nth-child(even) {background: #D9E6F6;}
.li:nth-child(odd) {background: var(--backgroundQuarternary)}
.li{
    
    min-height: 34px;
    padding: 9px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
}

/* CSS Pré-Pronto */
margin-bottom: 10px;

.boxLink {
    font-size: 1rem;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
}

.title {
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 8px;
    color: var(--textPrimaryColor); 
}

.subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
}

.smallTitle {
    font-size: .7rem;
    font-weight: 700;
    color: #999;
}

hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
}

input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
        color: #333333;
        opacity: 1;
    }
}
button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 8px;
    background-color: #6F92BB;
}
.info{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 134.53%;
    color: #999999;   
}
li{
    list-style: none;
}
.container{
    display: flex;
    justify-content: space-between;
    margin: 24px 24px;
    flex-direction: column
}
.perfil{
media (min-width: 860px) {
    display: none;
}}
`//inicaiar com maiusculo, pois é um componente 

export default Box