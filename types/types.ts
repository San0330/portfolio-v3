import { navItemsTitles } from "../data/navItems"
import { projectCategories } from '../data/projects'

export type validSectionTitle = typeof navItemsTitles[number]

export type Category = typeof projectCategories[number]

export type Project = {
    name: string
    type: string
    description: string
    image: string
    deployed_url: string | null
    github_url: string
    category: Category[]
    key_techs: string[]
}
