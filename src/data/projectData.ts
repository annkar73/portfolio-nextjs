// TODO: update this file with project data
// src/data/projects.ts
export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
}

export const projects: IProject[] = [
  {
    id: 0,
    title: "Todo-app",
    description: "En enkel att göra-app byggd med React och TypeScript.",
    image: "",
    url: "https://github.com/dittrepo/todo",
  },
  {
    id: 1,
    title: "Memory-spel",
    description: "Ett memory-spel med ljud och tema.",
    image: "",
    url: "https://github.com/dittrepo/memory",
  },
  // Fyll på...
];
