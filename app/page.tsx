import AppComponent from "./AppComponent";
import { getCateorisedArticles, getSortedArticles } from "./lib/article";

export default function Home() {
  const articles = getCateorisedArticles()

  return (
    <AppComponent articles={articles} />
  )
}
