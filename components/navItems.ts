const navItemsTitles = [
    'about', 'skills', 'experiences',
    'education', 'projects', 'achievements', 'blogs'
] as const

export type validSectionTitle = typeof navItemsTitles[number]

export default navItemsTitles
