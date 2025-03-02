# Who's That Pokémon? 🎮🔍

So aniguess was down so I built this guessing game where you test your knowledge of Pokémon by guessing based on their silhouette! Built with Astro for fast static site generation.

## Features ✨

- 🖼️ **Silhouette Challenge**: Guess the Pokémon from its shadowy image
- ❓ **Progressive Clues**: Reveal types, generation, and Pokédex entries as hints
- ⏳ **Limited Guesses**: 4 attempts to get it right before game over
- 📱 **Responsive Design**: Play seamlessly on desktop and mobile devices
- 🔄 **Randomized Gameplay**: New Pokémon after each round with Astro SSG
- 📖 **Pokédex Entries**: Authentic descriptions from the official games

## Installation 🛠️

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/whos-that-pokemon.git
cd whos-that-pokemon
```

2. Install dependencies
```bash
bun install
```

3. Fetch and process artworks
```bash
bun run assets
```

4. Start development server
```bash
bun run dev
```

5. Build (Optional)
```
bun run build
```

## How to Play 🕹️

1. Enter your guess in the text field

2. Click "Guess!" or press Enter to submit

3. Use revealed clues if you get stuck:

4. Win by guessing correctly or reveal the answer when you're stuck

5. Click "Next Pokémon" to keep playing!

# Credits 🙌

- Pokémon data from [PokeAPI](https://pokeapi.co/)

- Astro framework for static site generation

- Original game concept by Nintendo/Game Freak

# License

MIT License - see [LICENSE](LICENSE) for details.
