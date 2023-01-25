import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
//==========================================

async function HomePage() {
  // 1. Fetch the News Data
  const news: NewsResponse = await fetchNews(categories.join(','))


  return (
    <div>

    </div>
  )
}

export default HomePage;