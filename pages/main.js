import React from 'react'
import MainGrid from '../src/componets/mainGrid'
import Box from '../src/componets/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/componets/profileRelationsArea'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";
import LookDay from '../src/componets/LookDay/index'

import Head from 'next/head'


function ProfileSidebar(propriedades) {
  //console.log(propriedades)


  return (
    <Box>
      <img src={`https://github.com/${propriedades.perfilGitHub}.png`} style={{ borderRadius: '8px' }} />
      {/*colocar "/" para fechar as tags*/}
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.perfilGitHub}`}>
          @{propriedades.perfilGitHub}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  //console.log("eee", propriedades.followers)
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Seguidores <span className="boxLink">({propriedades.followers.length >= 30 ? `+${propriedades.followers.length}` : propriedades.followers.length})</span><br /><br />
        Seguindo <span className="boxLink">({propriedades.following.length >= 30 ? `+${propriedades.following.length}` : propriedades.following.length})</span>
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })} */}
      </ul>
      <hr />
      <a href="#" class="boxLink">Ver todos</a>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home(props) {
  const router = useRouter()
  const getRouter = router.query.username

  const perfilGitHub = getRouter
  const [comunidade, setComunidade] = React.useState([])
  // const indicaPosiçaoArray = comunidade[0]
  // const alteraArray = comunidade[1]
  // const comunidade = ['Alurakut']


  const pessoasFavoritas = [
    'marcobrunodev',
    'rafaballerini',
    'omariosouto',
    'juunegreiros',
    'peas'
  ]


  const [seguindo, setSeguindo] = React.useState([]);
  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect(function () {
    /*------Seguindo------ */

    fetch(`https://api.github.com/users/${perfilGitHub}/following`)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json()
      })
      .then(function (respostaCompleta) {
        setSeguindo(respostaCompleta)
        console.log(respostaCompleta)
      })

    /*------Seguidores------ */

    fetch(`https://api.github.com/users/${perfilGitHub}/followers`)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json()
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta)
        console.log(respostaCompleta)
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
        console.log(comunidadesDato)
        setComunidade(comunidadesDato)
      })

  }, [])

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{`AluraKut - ${perfilGitHub}`}</title>
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
      </Helmet> */}

      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Rom013"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{`AluraKut - ${perfilGitHub}`}</title>
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
      </Head>
      <AlurakutMenu githubUser={perfilGitHub}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar perfilGitHub={perfilGitHub} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box style={{ borderRadius: `8px 50px 8px 8px` }}>
            <h1 className="title">Bem vindo(a), {perfilGitHub}</h1>
            <p className="info">
              <span style={{ fontWeight: 'bold' }}>Frase de hoje: </span>
              <LookDay/>
            </p>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={function handle(e) {
              e.preventDefault()

              const dadosForm = new FormData(e.target)

              const comuni = {
                imageUrl: dadosForm.get('image'),
                title: dadosForm.get('title'),
                creatorSlug: perfilGitHub
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comuni)
              })
                .then(async (response) => {
                  const dados = await response.json()

                  console.log(dados.registroCriado)
                  const comuni = dados.registroCriado
                  const comunidadeAtualizada = [...comunidade, comuni]
                  setComunidade(comunidadeAtualizada)
                })

              // comunidade.push('novo')
              console.log(comunidade)
            }}>
              <div>
                <input
                  name="title"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  name="image"
                  placeholder="Insira uma URL para usarmos como capa"
                  aria-label="Insira uma URL para usarmos como capa"
                  type="text"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>

          <ProfileRelationsBox /*title="Seguidores"*/ followers={seguidores} following={seguindo} />

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
            <a onClick={() => { router.push(`/friends?username=${perfilGitHub}`) }}  class="boxLink">Ver todos</a>
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

/*export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN
  const { githubUser } = jwt.decode(token)
  // console.log("Decode token", jwt.decode(token))

  // console.log("dad", nookies.get(context).USER_TOKEN)

  const { isAuthenticated } = await fetch("https://alurakut-theta-orcin.vercel.app/api/auth", {
    headers: {
      Authorization: token,
    },
  })
  .then((resposta) => resposta.json())

  console.log("ta ok? ", isAuthenticated)

  if (!isAuthenticated){
    return{
      redirect: {
        destination: '/login',
        permanet: false,
      },
    }
  }

  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
}

*/