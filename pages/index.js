
import MainGrid from '../src/componets/mainGrid'
import Box from '../src/componets/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/componets/profileRelationsArea'

function ProfileSidebar(vaca){
  console.log(vaca)
  return(
    <Box>
      <img src={`https://github.com/${vaca.perfilGitHub}.png`} style={{ borderRadius: '8px'}}/> 
      {/*colocar "/" para fechar as tags*/}
    </Box>
  )
}

export default function Home() {
  const perfilGitHub = 'rom013'
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
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet/>
          </Box>
          <Box>
            Feed
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus amigos(as) ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={ itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Minhas Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
