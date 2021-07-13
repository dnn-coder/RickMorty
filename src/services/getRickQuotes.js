export const getRickQuotes = async queryTerm => {
    const url = `https://rickandmortyapi.com/api/location/${queryTerm}`
    const data =  await fetch(url).then((res) => res.json())
    return data
}
