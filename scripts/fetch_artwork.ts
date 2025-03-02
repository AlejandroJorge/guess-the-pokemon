import { pokemonNumbers, generation } from '../src/core/constants'
import { mkdir } from 'fs/promises'
import { Jimp } from 'jimp'

const amount = pokemonNumbers[generation]
const chunkSize = 16

const baseUrl = 'https://raw.githubusercontent.com'
const basePath = '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

const fetchArtwork = async (id: number) => {
    const url = `${baseUrl}${basePath}${id}.png`
    const response = await fetch(url)
    const artwork = await response.arrayBuffer()
    return artwork
}

const pipe = async (id : number) => {
    const artwork = await fetchArtwork(id)
    const img = await Jimp.fromBuffer(artwork)
    await img.write(`public/original/${id}.png`)
    img.brightness(0)
    await img.write(`public/processed/${id}.png`)
}

await mkdir(`public/original`, { recursive: true })
await mkdir(`public/processed`, { recursive: true })

for (let i = 0; i < amount; i += chunkSize) {
    console.log(`[Artwork Fetching] Processing chunk ${i / chunkSize + 1} of ${Math.ceil(amount / chunkSize)}`)
    const chunk = Array.from({ length: chunkSize }, (_, j) => i + j + 1).filter(id => id <= amount)
    await Promise.all(chunk.map(pipe))
}
