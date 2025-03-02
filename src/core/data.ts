import { generation, pokemonNumbers } from "./constants"
import { v4 as uuidv4 } from 'uuid';

type Pokemon = {
    id: number
    name: string
    height: number
    weight: number
    species: {
        name: string
        url: string
        flavor_text_entries: {
            flavor_text: string
            language: {
                name: string
            }
        }[]
    }
    types: {
        type: {
            name: string
        }
    }[]
}

export const fetchPokemon = async (pokemon: number | string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const pokemonData = await response.json()
    
    const speciesResponse = await fetch(pokemonData.species.url)
    const speciesData = await speciesResponse.json()
    
    return {
        ...pokemonData,
        species: {
            ...pokemonData.species,
            ...speciesData
        }
    } as Pokemon
}

export const uuidMapping: Record<string, number> = Array.from({length: pokemonNumbers[generation]}).map(
    (_,i) => {
        return [uuidv4(), i + 1] as const
    }
).reduce((acc, [uuid, id]) => {
    acc[uuid] = id
    return acc
}, {} as Record<string, number>)

export const getRandomPokemonUuid = () => {
    const uuids = Object.keys(uuidMapping)
    return uuids[Math.floor(Math.random() * uuids.length)]
}