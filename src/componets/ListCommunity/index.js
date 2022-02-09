import { useRouter } from "next/router"

export default function ListCommunity(props, key) {
    const router = useRouter()
    return (
        <>
            <li key={key} onClick={() => { router.push(`/community/info?name=${props.title}`) }}>
                <img src={props.img} />
                <div>
                    <h2 className="titleContainer">{props.title}</h2>
                    <p className="smallTitle">{parseInt(Math.random() * 10000)} membros</p>
                </div>
            </li>
            <style jsx>{`
                li:nth-child(even) {background: #D9E6F6;}
                li:nth-child(odd) {background: var(--backgroundQuarternary)}
                li{
                   
                    height: 124px;
                    padding: 16px 20px;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    column-gap: 25px;
                }
                img{
                    width: 95px;
                    height: 95px;
                    border-radius: 50%
                }
                .titleContainer{
                    margin-bottom: 10px;
                    color: #2E7BB4;
                    font-weight: 500;
                    font-size: 1rem
                }
                
            `}</style>
        </>
    )
}

export function ListCommunityInfo() {
    const detail = [
        "idioma:    Português",
        "categoria:     Humor",
        "dono:     Rom013",
        "moderadores:   nenhum",
        "tipo:  público",
        "privacidade de conteúdo:   aberto para não-membros",
        "local:     Brasil",
        "criado em:     08 jun de 2017 23:01",
        "membros:   1111111"


    ]
    return (
        <>
            {detail.map((detail, key) => {
                return (
                    <tr key={key}>
                        <td key={key}>
                            {detail}
                        </td>
                    </tr>
                )
            })}

            <style jsx>{`
                tr:nth-child(even) {background: var(--backgroundSecondary)}
                tr:nth-child(odd) {background: var(--backgroundQuarternary)}
                table{
                    width: 100%
                }
                tr{   
                    height: 24px;
                    padding: 16px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;  
                }
                td{
                    font-size: 1rem;
                    font-weight: 400;
                    color: #333;
                }
                
            `}</style>
        </>
    )
}