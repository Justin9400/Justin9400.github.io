export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
  tech: { icon: React.ReactNode; name: string }[];
}
