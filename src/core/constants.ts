export const generation = (process.env.GENERATION || 1) as keyof typeof pokemonNumbers

export const pokemonNumbers = {
    1: 151,
    2: 251,
    3: 386,
    4: 493,
    5: 649,
    6: 721,
    7: 809,
    8: 905,
}

export const maxGuesses = 4