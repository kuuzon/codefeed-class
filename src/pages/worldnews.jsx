import Hero from "@/components/layout/Hero"
import ArticleList from "@/components/feature/articles/ArticleList";

const WorldNewsPage = ({ worldArticles }) => {
  return (
    <div>
      <Hero 
        title='World'
        description='Catch up on World News :)'
        bgImage='/backgrounds/hero-news.webp'
      />
      {/* Articles down here */}
      {worldArticles.length > 0 && <ArticleList articles={worldArticles} />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=bbc-news&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      worldArticles: articles
    },
  };
};

export default WorldNewsPage