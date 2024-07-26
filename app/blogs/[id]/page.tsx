import { getArticleData, getSortedArticles } from "@/app/lib/article"
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export function generateStaticParams() {
    const articles = getSortedArticles();
    return articles.map((article) => { id: article.id })
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const articleData = await getArticleData(id);
    return <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
        <div className="flex justify-between">
            <Link href={"/#blogs"} className="flex flex-row gap-1 place-items-center">
                <FaArrowLeft width={20} />
                <p className="ml-1">Back to home</p>
            </Link>
            <p>{articleData.date.toString()}</p>
        </div>
        <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />

    </section>
}