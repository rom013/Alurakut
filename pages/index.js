import React from 'react'
import MainGrid from '../src/componets/mainGrid'
import Box from '../src/componets/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/componets/profileRelationsArea'

function ProfileSidebar(propriedades){
  console.log(propriedades)
  return(
    <Box>
      <img src={`https://github.com/${propriedades.perfilGitHub}.png`} style={{ borderRadius: '8px'}}/> 
      {/*colocar "/" para fechar as tags*/}
      <hr/>
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.perfilGitHub}`}>
          @{propriedades.perfilGitHub}
        </a>
      </p>
      <ul>
        <li className="info">
          masculino
        </li>
        <li className="info">
          solteiro(a)
        </li>
        <li className="info">
          Brasil
        </li>
      </ul>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  const perfilGitHub = 'rom013'
  const [comunidade, setComunidade] = React.useState([{
    id: '6323262300598218222658',
    title: 'Eu odeio acordar cedo',
    image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg'
  }])
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
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea"}}>  
          <ProfileSidebar perfilGitHub={perfilGitHub}/>
        </div> 
        <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <Box>
            <h1 className="title">Bem vindo(a), Rômullo</h1>
            <p className="info">
              <span style={{ fontWeight: 'bold'}}>Sorte de hoje: </span>
              Não somos seres humanos vivendo uma experiência espiritual, somos seres espirituais vivendo uma experiência humana. Wayne W. Dyer
            </p>
            <OrkutNostalgicIconSet/>
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handle(e){
              e.preventDefault()

              const dadosForm = new FormData(e.target)

              const comuni = {
                image: dadosForm.get('image'),
                title: dadosForm.get('title'),
                id: new Date().toISOString,
              }

              const comunidadeAtualizada = [...comunidade, comuni]

              setComunidade(comunidadeAtualizada)

              // comunidade.push('novo')
              console.log(comunidade)
            }}>
              <div>
                <input
                name= "title"
                placeholder= "Qual vai ser o nome da sua comunidade?"
                aria-label= "Qual vai ser o nome da sua comunidade?"
                type= "text"
                />
              </div>
              <div>
                <input
                name= "image"
                placeholder= "Insira uma URL para colocarmos como capa"
                aria-label= "Insira uma URL para colocarmos como capa"
                type= "text"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus amigos(as) <span className="boxLink">({pessoasFavoritas.length})</span>
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <hr/>
            <a href="#"class="boxLink">Ver todos</a>
          </ProfileRelationsBoxWrapper>

          <Box>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Minhas comunidades <span className="boxLink">({comunidade.length})</span>
            </h2>
            <ul>
              {comunidade.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image}/>
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <hr/>
            <a href="#"class="boxLink">Ver todos</a>
          </ProfileRelationsBoxWrapper>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
