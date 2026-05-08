export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
};

export const projectsData: Project[] = [
  { id: 1, title: "PIXEL PULSE", category: "e-commerce", image: "/projs/pixelpulse.png", color: "#bd00ff" },
  { id: 2, title: "URBAN SCAPES", category: "mobile app design", image: "/projs/urbanscapes.png", color: "#00f2fe" },
  { id: 3, title: "NEBULA", category: "audio platform", image: "/projs/nebula.png", color: "#4facfe" },
  { id: 4, title: "FLOW STATE", category: "video platform", image: "/projs/flowstate.png", color: "#bd00ff" },
  { id: 5, title: "ARTISAN", category: "branding", image: "/projs/artisan.png", color: "#4facfe" },
  { id: 6, title: "SKYLINE", category: "interactive map", image: "/projs/skyline.png", color: "#00f2fe" },
];
