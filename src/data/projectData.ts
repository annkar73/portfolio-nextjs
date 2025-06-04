// src/data/projectData.ts
export interface IProject {
  id: string; 
  image: string;
  url?: string;
  github?: string;
}

export const projects: IProject[] = [
  {
    id: "wordmatch",
    image: "/project-images/matcha_ord.png",
    url: "https://karlsen-wordmatch.netlify.app/",
    github: ""
  },
  {
    id: "memory",
    image: "/project-images/memory_screen.png",
    url: "https://annkar73.github.io/memory-game/",
    github: ""
  },
  {
    id: "advent",
    image: "/project-images/advent_screen.png",
    url: "https://karlsen-advent.netlify.app/",
    github: ""
  },
  {
    id: "numbers",
    image: "/project-images/slumpgenerator.png",
    url: "https://annkar73.github.io/lotto-generator/",
    github: ""
  },
  {
    id: "christmas",
    image: "/project-images/christmas_card.png",
    url: "https://karlsen-christmas.netlify.app/",
    github: ""
  },
  {
    id: "birthday",
    image: "/project-images/happy_birthday.png",
    url: "https://karlsen-birthday.netlify.app/",
    github: ""
  },
  {
    id: "endless",
    image: "/project-images/endless_counter.png",
    url: "https://annkar73.github.io/vue-endless-countdown/",
    github: "https://github.com/annkar73/vue-endless-countdown"
  }
  // Fyll på med fler projekt
];
