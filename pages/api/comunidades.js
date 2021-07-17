import { SiteClient } from 'datocms-client'

export default async function recebedorRequests(request, response){
    if (request.method === 'POST'){
        const TOKEN = "d6def83fad1286b7191e217b0f592c"
        const client = new SiteClient(TOKEN);
        console.log(TOKEN)

        const registroCriado = await client.items.create({
            itemType: "972016", // Id model criado pelo Dato
            ...request.body,
            // title: "Você é meu fã",
            // imageUrl: "https://github.com/rom013.png",
            // creatorSlug: "Rômullo"
        })

        console.log(registroCriado)

        response.json({
            dados: "dados",
            registroCriado: registroCriado,
        })
        return
    }
    response.status(404).json({
        message: "ERRO 404"
    })

} 
