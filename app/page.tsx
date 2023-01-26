import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
//==========================================

async function HomePage() {
  // 1. Fetch the News Data
  const news: NewsResponse = await fetchNews(categories.join(','))

  console.log(news)

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default HomePage;