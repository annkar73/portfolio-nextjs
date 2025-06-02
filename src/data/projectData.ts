// src/data/projectData.ts
export interface IProject {
  id: string; 
  image: string;
  url?: string;
}

export const projects: IProject[] = [
  {
    id: "wordmatch",
    image: "/project-images/matcha_ord.png",
    url: "https://karlsen-wordmatch.netlify.app/",
  },
  {
    id: "memory",
    image: "/project-images/memory_screen.png",
    url: "https://annkar73.github.io/memory-game/",
  },
  {
    id: "advent",
    image: "/project-images/advent_screen.png",
    url: "https://karlsen-advent.netlify.app/",
  },
  {
    id: "numbers",
    image: "/project-images/slumpgenerator.png",
    url: "https://annkar73.github.io/lotto-generator/"
  },
  {
    id: "christmas",
    image: "/project-images/christmas_card.png",
    url: "https://karlsen-christmas.netlify.app/"
  }
  // Fyll på med fler projekt
];
