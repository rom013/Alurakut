export default function LookDay(){
    const phrase = [
        "Não somos seres humanos vivendo uma experiência espiritual, somos seres espirituais vivendo uma experiência humana. Wayne W. Dyer",
        "Javali montado em um cavalo",
        "O fracasso de hoje, será o sucesso de amanhã.",
        "Hoje eu tô muito disposto, a não fazer nada.",
        "Se não fosse pra comer de madrugada não teria lâmpada na geladeira.",
        '"Sua senha é fraca" a minha memória também, então vai ser essa mesma.'
    ]
    const random = parseInt(Math.random()*phrase.length)
    return(
        <p>{phrase[random]}</p>
    )
}