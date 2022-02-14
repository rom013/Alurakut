import React from 'react'
import MainGrid from '../src/componets/mainGrid'
import Box from '../src/componets/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import Head from 'next/head'
import { ProfileRelationsBoxWrapper } from '../src/componets/profileRelationsArea'
import { useRouter } from 'next/router'

import Perfil from '../src/componets/Perfil'

export default function perfil() {

    const router = useRouter()
    const getRouter = router.query.username

    const [API, setAPI] = React.useState([])
    

    const pessoasFavoritas = [
        'marcobrunodev',
        'rafaballerini',
        'omariosouto',
        'juunegreiros',
        'peas'
    ]

    const [comunidade, setComunidade] = React.useState([])
    
    
   
    React.useEffect(function () {
        fetch(`https://api.github.com/users/${getRouter}`)
            .then((promise)=> promise.json())
            .then((e)=>{
                console.log("eee", e.name) 
                setAPI(e)
            })
    }, [])

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
                setComunidade(comunidadesDato)
            })
    }, [])

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content="Rom013" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{`AluraKut - perfil`}</title>
                <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
            </Head>
            <AlurakutMenu githubUser={getRouter}/>
            <MainGrid style={{ gridTemplateColumns: "1fr 2fr 1.5fr" }}>
                <Box style={{ height: "30%" }}>
                    <h2 className="title">Apresentação</h2>
                    <hr />
                    <ul style={{ marginTop: "20px" }}>
                        <li className="li">Brasil</li>
                        <li className="li">{getRouter}</li>
                    </ul>
                </Box>
                <Box style={{height: "65%"}}>
                    <Perfil userName={getRouter} name={API.name}/>
                </Box>

                <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Meus amigos(as) <span className="boxLink">({pessoasFavoritas.length})</span>
                        </h2>
                        <hr />
                        <ul>
                            {pessoasFavoritas.map((itemAtual) => {
                                return (
                                    <li key={itemAtual}>
                                        <a href={`/users/${itemAtual}`}>
                                            <img src={`https://github.com/${itemAtual}.png`} />
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <hr />
                        <a onClick={() => { router.push(`/friends?username=${getRouter}`) }} class="boxLink">Ver todos</a>
                    </ProfileRelationsBoxWrapper>

                    <Box>
                        <ProfileRelationsBoxWrapper>
                            <h2 className="smallTitle">
                                Minhas comunidades <span className="boxLink">({comunidade.length})</span>
                            </h2>
                            <hr />
                            <ul>
                                {comunidade.map((itemAtual) => {
                                    return (
                                        <li key={itemAtual.id}>
                                            <a href={`/users/${itemAtual.id}`}>
                                                <img src={itemAtual.imageUrl} />
                                                <span>{itemAtual.title}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <hr />
                            <a onClick={() => { router.push(`/community?username=${perfilGitHub}`) }}
                                class="boxLink"
                            >
                                Ver todos
                            </a>
                        </ProfileRelationsBoxWrapper>
                    </Box>
                </div>

            </MainGrid>
        </>
    )
}