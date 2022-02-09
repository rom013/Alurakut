import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AluraKutCommons'
import Box from "../src/componets/Box/index"
import MainGrid from "../src/componets/mainGrid/index"
import ListCommunity from "../src/componets/ListCommunity/index"
import React from 'react'
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";


export default function community() {
    const router = useRouter()
    const roteamento = router.query.username


    console.log(roteamento)

    const [comunidade, setComunidade] = React.useState([])

    React.useEffect(function () {
        //API GraphQL
        fetch('https://graphql.datocms.com', {
            method: 'POST',
            headers: {
                'Authorization': 'feab8203d76cd8b6a6c0375545f347',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "query": `query{
            allCommunities{
              title
              id
              creatorSlug
              imageUrl
            }
          }`})
        })

            .then((response) => response.json())
            .then((respostaCompleta) => {
                const comunidadesDato = respostaCompleta.data.allCommunities
                // console.log(comunidadesDato)
                setComunidade(comunidadesDato)
            })

    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`AluraKut - Minhas comunidades`}</title>
                <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
            </Helmet>
            <AlurakutMenu githubUser={roteamento} />
            <MainGrid style={{ gridTemplateColumns: "160px 1fr" }}>
                <div className="profileArea" style={{ gridArea: "profileArea" }}>
                    <Box style={{ height: "50%" }}>

                        <img src={`https://github.com/${roteamento}.png`} style={{ borderRadius: '8px' }} />
                        {/*colocar "/" para fechar as tags*/}
                        <hr />
                        <p title={`github.com/${roteamento}`}>
                            <a className="boxLink" href={`https://github.com/${roteamento}`}>
                                @{roteamento}
                            </a>
                        </p>
                        <hr />
                        <AlurakutProfileSidebarMenuDefault />

                    </Box>
                </div>
                <Box style={{ marginBottom: "200px" }}>
                    <h2 className="title">Minhas comunidades</h2>
                    <p className="smallTitle"><a className="boxLink" onClick={()=>{router.push(`/main?username=${roteamento}`)}} style={{ fontSize: ".7rem" }}>inicio</a> / Minhas Comunidades</p>
                    <br />
                    <button>Criar comunidade</button>

                    <div className="container">
                        <p style={{ position: "relative", marginBottom: "20px" }} className="smallTitle">1 de 1</p>
                        <ul>
                            {comunidade.map((props, key) => {
                                //console.log(props)
                                return (
                                    <ListCommunity title={props.title} img={props.imageUrl} key={key}/>
                                )
                            })}

                        </ul>
                    </div>
                </Box>
            </MainGrid>
        </>
    )
}