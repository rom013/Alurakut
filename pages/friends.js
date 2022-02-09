import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AluraKutCommons'
import Box from "../src/componets/Box/index"
import MainGrid from "../src/componets/mainGrid/index"
import ListCommunity from "../src/componets/ListCommunity/index"
import React from 'react'
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";


export default function friends() {
    const router = useRouter()
    const roteamento = router.query.username

    const pessoasFavoritas = [
        'marcobrunodev',
        'rafaballerini',
        'omariosouto',
        'juunegreiros',
        'peas',
        "uzmigames",
        "alura"
        
    ]
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`AluraKut - Meus Amigos`}</title>
                <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
            </Helmet>
            <AlurakutMenu githubUser={roteamento} />
            <MainGrid style={{ gridTemplateColumns: "160px 1fr" }}>
            <PerfilArea/>
                <Box style={{ marginBottom: "200px" }}>
                    <h2 className="title">Meus Amigos</h2>
                    <p className="smallTitle"><a className="boxLink" onClick={()=>{router.push(`/main?username=${roteamento}`)}} style={{ fontSize: ".7rem" }}>inicio</a> / Meus Amigos</p>
                    <br />
                    <div className="container">
                    <ul style={{display: "flex", flexWrap: "wrap"}}>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual} style={{margin:"0 0 25px 25px"}}>
                    <a className="boxLink" href={`https://github.com/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} style={{width: "150px", height: "150px", borderRadius: "5px"}}/>
                      <span className="subTitle">{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
                    </div>
                </Box>
            </MainGrid>
        </>
    )
    function PerfilArea() {
        return (
            <div className="profileArea" style={{ gridArea: "profileArea" }}>
                <Box>
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
        )
    }
}

