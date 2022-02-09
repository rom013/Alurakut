import Box from "/src/componets/Box/index"
import React from 'react'
import MainGrid from "/src/componets/mainGrid/index"
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from "/src/lib/AluraKutCommons"
import { ProfileRelationsBoxWrapper } from '/src/componets/profileRelationsArea'
import { useRouter } from 'next/router'
import { ListCommunityInfo } from "/src/componets/ListCommunity/index"
import Head from "next/head"

export default function Test() {
    const router = useRouter()
    const getRouter = router.query.name

    const membrosComunidade = [
        'marcobrunodev',
        'rafaballerini',
        'omariosouto',
        'juunegreiros',
        'peas',
        'uzmigames',
    ]

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content="Rom013"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{`AluraKut - ${getRouter}`}</title>
                <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
            </Head>
            <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: "profileArea" }}>
                    <Box >

                        <img src={`https://via.placeholder.com/300x300`} style={{ borderRadius: '8px' }} />
                        {/*colocar "/" para fechar as tags*/}
                        <hr />
                        <p>
                            <a className="boxLink">
                                {getRouter}
                            </a>
                        </p>
                        <p className="smallTitle">({parseInt(Math.random() * 10000)} membros)</p>
                        <hr />
                        <a className="boxLink" style={{ fontSize: ".8rem", fontWeight: "400", textAlign: "center", display: "block", position: "relative" }}> Participar da comunidade</a>

                    </Box>
                </div>
                <Box>
                    <h2 className="title">{getRouter}</h2>
                    <p className="smallTitle"><a className="boxLink" onClick={() => { router.push(`/main?username=rom013`) }} style={{ fontSize: ".7rem" }}>inicio</a> / Minhas Comunidades</p>
                    <hr />

                    <table style={{width: "100%"}}>
                        <tbody>
                            <ListCommunityInfo/>
                        </tbody>
                    </table>
                </Box>

                <ProfileRelationsBoxWrapper style={{ height: "350px" }}>
                    <h2 className="smallTitle">
                        Membros <span className="boxLink">({membrosComunidade.length})</span>
                    </h2>
                    <hr />
                    <ul>
                        {membrosComunidade.map((itemAtual) => {
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
                    <a class="boxLink">Ver todos</a>
                </ProfileRelationsBoxWrapper>
            </MainGrid>
        </>
    )
}