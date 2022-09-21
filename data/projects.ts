import { Project } from '../types/types'

export const projectCategories = [
    'featured',
    'flutter',
    'php',
    'node',
    'code',
] as const;

export const projects: Project[] = [
    {
        name: 'Sandesh (chat app)',
        type: 'Sockets',
        description:
            "A basic realtime chat application done to practise Typescript as well as socketIO. Uses express-session for authentication and mongoDB to store chats.",
        image: 'chat-app.png',
        deployed_url: null,
        github_url: 'https://github.com/San0330/Sandesh-chat-app#readme',
        category: ['node', 'featured'],
        key_techs: ['ExpressJS', 'NodeJS', 'MongoDB', 'SocketIO', 'Typescript'],
    },
    {
        name: 'MED KIT',
        type: 'Mobile Application',
        description:
            "The project is a part of final year college project. Due to the current situation caused by Covid-19, Our team decided to contribute in the field of mobile health care system. The project uses 'symptom checker API' and simpler version of 'step detection algorithm' and also BMI calculation formula.",
        image: 'health-care-app.png',
        deployed_url: null,
        github_url: 'https://github.com/San0330/Health-Care-App#readme',
        category: ['flutter', 'featured'],
        key_techs: ['Flutter', 'NodeJS', 'MongoDB'],
    },
    {
        name: 'Cloud Training',
        type: 'Learning',
        image: 'code.jpeg',
        deployed_url: null,
        github_url: 'https://github.com/San0330/Cloud-Training#readme',
        category: ['code', 'featured'],
        description: 'This project is a part of cloud apprentice program that uses various cloud technologies to build a mini demo project. ',
        key_techs: ['NodeJS', 'Cloud'],
    },
    {
        name: 'Php custom framework',
        type: 'web',
        description:
            'This is an experimental project to understand how frameworks works, using concepts from various internet resources.',
        image: 'php.png',
        deployed_url: null,
        github_url: 'https://github.com/San0330/Php-with-custom-framework',
        category: ['php'],
        key_techs: ['php', 'framework'],
    },
    {
        name: 'MED KIT API',
        type: 'Backend',
        description: 'REST API for Health Care App ',
        image: 'health-care-app.png',
        deployed_url: null,
        github_url: 'https://github.com/San0330/Health-Care-API',
        category: ['node'],
        key_techs: ['Flutter', 'NodeJS', 'MongoDB'],
    },
    {
        name: 'Algorithms',
        type: 'Learning',
        image: 'code.jpeg',
        deployed_url: null,
        github_url: 'https://github.com/San0330/algorithms',
        category: ['code'],
        description: 'Some popular CS algorithms written in python.',
        key_techs: ['Python', 'Problem solving', 'Algorithms'],
    },
    {
        name: 'UVA Solutions',
        type: 'Learning',
        image: 'code.jpeg',
        deployed_url: null,
        github_url: 'https://github.com/San0330/UVA-Solutions',
        category: ['code'],
        description: 'Some programming problems from UVA platform solved using C++',
        key_techs: ['C++', 'Problem solving', 'Algorithms'],
    },
]
