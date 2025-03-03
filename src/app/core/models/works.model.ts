export interface Work {
    id: number;
    title: string;
    category: 'Angular' | 'SpringBoot' | 'React';
    description: string;
    urlImg: string;
    repositoryLink?: string;
    date: string;
    url?: string;
    technologies: string[];
}