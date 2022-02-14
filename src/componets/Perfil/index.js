import styled from "styled-components"

const Perfil = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    .imgBackground{
        width: 100%;
        height: 200px;
    }
    .imgProfile{
        transform: translateY(-70px);
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid #fff
    }
    .title {
        font-family: sans-serif;
        font-size: 32px;
        font-weight: 700;
        margin-top: -70px;
        margin-bottom: 8px;
        color: var(--textPrimaryColor); 
    }
    .follow{
        width: 96%;
        display: flex;
        justify-content: space-between;
        position: relative;
        top: -118px;
    }
    .smallTitle {
        font-size: .7rem;
        font-weight: 700;
        color: #999;
    }
`

export default function (props) {
    return (
        <Perfil>
            <img className="imgBackground" src="https://media.istockphoto.com/vectors/blockchain-abstract-background-vector-id911033734?k=20&m=911033734&s=612x612&w=0&h=_YqaEsQoSr3P2bmHgBDN5wC9fdy-9XKmj0zWf1Dh2VM="/>
            <img className="imgProfile" src={`https://github.com/${props.userName}.png`}/>
            <div className="follow">
                <p className="smallTitle">Seguidores: 200</p>
                <p className="smallTitle">Seguindo: 11</p>
            </div>
            <h1 className="title">{props.name}</h1>
        </Perfil>
    )
}