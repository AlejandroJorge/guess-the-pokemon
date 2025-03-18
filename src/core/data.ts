import { generation, pokemonNumbers } from "./constants"

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

export const fetchRandomPokemon = async () => {
    const idx = Math.floor(Math.random() * pokemonNumbers[generation])

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idx}`)
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
