
//Buscar links salvos
export async function getLinksSave(key){

    const myLinks = await localStorage.getItem(key);

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}


//Salvar link no localStorage
export async function saveLink(key, newLink){

    let linksStored = await getLinksSave(key)
    //Se já tem link salvo não duplicar
    const hasLink = linksStored.some(Link => Link.id === newLink.id) 

    if(hasLink){
        //Link já existe.
        return;
    }

    //Adicionar link
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo!')
}


//Deletar link salvo
export function deleteLink(Links, id){
    //percorre todos os links e retorna eles menos o que foi deletado
    let myLinks = Links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks;
}
