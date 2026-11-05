export const links = {
  email: 'mailto:leodm230@gmail.com',
  github: 'https://github.com/leo23230',
  itch: 'https://starloomstudios.itch.io/',
  steam: 'https://store.steampowered.com/app/5443450/Spektr/',
  resume: 'Leo_Melendez_Gameplay_Resume.pdf',
}

export const spektr = {
  title: 'Spektr',
  role: 'Solo Gameplay Programmer',
  release: 'Steam Early Access · Nov 2026',
  description: 'An asymmetrical horror game where one ghost haunts a mansion while up to four hunters work together to drive it out.',
  hero: 'spektr-hero.webp',
  heroAlt: 'The mansion interior in Spektr',
  poster: 'spektr-trailer.webp',
  video: 'spektr-trailer.mp4',
  work: [
    {
      title: 'Multiplayer gameplay',
      description: 'I built the game in Unity and C# with FishNet. The server owns combat, hunter health, and round state so players share the same outcome.',
    },
    {
      title: 'Art direction and sound',
      description: 'I led the art direction and made sound effects using my own recordings, synthesis, and samples from Freesound.org.',
    },
  ],
  performance: [
    { value: '<30 FPS', label: 'Before lighting changes' },
    { value: '>60 FPS', label: 'Consistently, highest settings' },
    { value: '>100 FPS', label: 'Reduced graphics settings' },
  ],
}

export const projects = [
  {
    id: 'octoslayer',
    number: '02',
    title: 'Octoslayer',
    role: 'Gameplay Programmer',
    category: 'First-person stealth prototype',
    description: 'A first-person stealth game prototype starring an octopus assassin.',
    contribution: 'Built player physics, interactions, enemy behavior, dialogue, and game-state systems. Used object pooling, occlusion culling, and light probes to improve performance.',
    tags: ['Unity', 'C#', 'Player physics', 'Enemy behavior'],
    image: 'octoslayer.webp',
    alt: 'Gameplay footage from the Octoslayer prototype',
    video: 'https://www.youtube.com/watch?v=HI9iaty3_uQ',
  },
  {
    id: 'clerical-error',
    number: '03',
    title: 'Clerical Error',
    role: 'Lead Gameplay Programmer',
    category: 'Five-person team project',
    description: 'A game about keeping an adventuring party alive as its cleric, one small intervention at a time.',
    contribution: 'Built the gameplay architecture and player-facing features in Unity, and helped shape the game design on a five-person team.',
    tags: ['Unity', 'Gameplay architecture', 'Team development'],
    image: 'clerical-error.webp',
    alt: 'Gameplay footage from Clerical Error',
    video: 'https://www.youtube.com/watch?v=mcW-dolIMkU',
  },
]
