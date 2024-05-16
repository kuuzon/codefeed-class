import Hero from "@/components/layout/Hero"
import ArticleList from "@/components/feature/articles/ArticleList";

const AusNewsPage = ({ ausArticles }) => {
  console.log(ausArticles);

  return (
    <div>
      <Hero 
        title='Aus'
        description='Catch up on Aus News :)'
        bgImage='/backgrounds/hero-news.webp'
      />
      {/* Articles down here */}
      {ausArticles.length > 0 && <ArticleList articles={ausArticles} />}
    </div>
  )
}

export const getStaticProps = async () => {
  // fetch
  const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      ausArticles: articles
    },
    revalidate: 60
  };
};

export default AusNewsPage