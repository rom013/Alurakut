import React from 'react'
import { useRouter } from 'next/router' //Permitir o uso do rotiamento 
import { Helmet } from "react-helmet";

//Hook do next JS
import nookies from 'nookies' //biblioteca de cookies do node.js

export default function LoginScreen() {
  const router = useRouter()
  const [userGithub, setUserGithub] = React.useState('')


  const red = "red 2px solid"
  const blue = "border: blue 2px solid"

  const githubLength = userGithub.length
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`AluraKut`}</title>
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/691421631700271114/935320323379843192/logo-alura.png" />
      </Helmet>
      <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div className="loginScreen">
          <section className="logoArea">
            <img src="https://alurakut.vercel.app/logo.svg" />

            <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
            <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
            <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
          </section>

          <section className="formArea">
            <form className="box" onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault()
              console.log(infosDoEvento)

              fetch('https://alurakut.vercel.app/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ githubUser: userGithub })
              })
                .then(async (respostaDoServidor) => {
                  const dadosDaResposta = (await respostaDoServidor.json())
                  const token = dadosDaResposta.token
                  nookies.set(null, 'USER_TOKEN', token, {
                    path: '/',
                    maxAge: 86400 * 7,
                  })
                  router.push(`/main?username=${userGithub}`)
                })
            }}>
              <p>
                Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
              </p>
              <input
                placeholder="Usuário"
                value={userGithub}
                onChange={(infosDoEvento) => {
                  setUserGithub(infosDoEvento.target.value)
                }}
                style={userGithub.length === 0 ? {border: red}: {border: "#000"}}
              />

              {userGithub.length === 0 //ternario
                ? (
                  'Campo de usuario vazio'
                ) // false
                : '' //true
              }
              <button 
                type="submit"
              >
                Login
              </button>
            </form>

            <footer className="box">
              <p>
                Ainda não é membro? <br />
                <a href="https://github.com">
                  <strong>
                    ENTRAR JÁ
                  </strong>
                </a>
              </p>
            </footer>
          </section>

          <footer className="footerArea">
            <p>
              © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}