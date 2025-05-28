// src/data/projects.ts
export interface IProject {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export const projects: IProject[] = [
  {
    title: "Todo-app",
    description: "En enkel att göra-app byggd med React och TypeScript.",
    image: "",
    url: "https://github.com/dittrepo/todo",
  },
  {
    title: "Memory-spel",
    description: "Ett memory-spel med ljud och tema.",
    image: "",
    url: "https://github.com/dittrepo/memory",
  },
  // Fyll på...
];
