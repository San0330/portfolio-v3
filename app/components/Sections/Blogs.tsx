import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { useContext } from "react";
import { ArticlesContext } from "@/app/AppComponent";
import { ArticleItem } from "@/app/types/types";
import Link from "next/link";

const Blogs = () => {
    const articles = useContext(ArticlesContext)
    
    return (
        <Section name='blogs'>
            <Heading1 title="sharing knowledge" />
            <Heading2 title='Blogs' />
            <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
                {articles != null && Object.keys(articles).map((article) => (
                    <ArticleItemList key={article} category={article} articles={articles[article]} />
                ))}
            </section>
        </Section>
    )
}
interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
    return (
        <div className="flex flex-col  gap-5">
            <h2 className="text-4xl">{category}</h2>
            <div className="flex flex-col gap-2.5 text-lg">
                {articles.map((article, id) => (
                    <Link
                        href={`/${article.id}`}
                        key={id}
                        className="text-neutral-900 hover:text-amber-700 transition duration-150">
                        {article.title}
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Blogs;