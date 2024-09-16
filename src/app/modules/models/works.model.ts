export interface Work {
    id: number;
    title: string;
    category: 'Angular' | 'SpringBoot' | 'react';
    description: string;
    urlImg: string;
    repositoryLink?: string;
}