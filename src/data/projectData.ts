// src/data/projectData.ts
export interface IProject {
  id: string; // används för att slå upp översättning
  image: string;
  url?: string;
}

export const projects: IProject[] = [
  {
    id: "todo",
    image: "",
    url: "https://github.com/dittrepo/todo",
  },
  {
    id: "memory",
    image: "",
    url: "https://github.com/dittrepo/memory",
  },
  // Fyll på med fler projekt
];
