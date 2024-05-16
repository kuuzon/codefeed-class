import { Fragment } from "react"
import Head from "next/head"
import ArticleDetail from "@/components/feature/articles/ArticleDetail"

const ArticleDetailPage = (props) => {
  const { article } = props;
  console.log(article);

  return (
    <Fragment>
      <Head>
        <title>CodeFeed | TBC</title>
        <meta name="description" content="TBC" />
      </Head>
      {/* Article Detail Component */}
      <ArticleDetail 
        title={article.title}
        image={article.image}
        description={article.description}
        category={article.category}
      />
    </Fragment>
  )
}

export const getStaticPaths = async () => {
  // Fetch the data (all the data)
  const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
  const articles = await response.json();

  // Pull ALL the ids out of articles arrays (in our db)
  // [1,2,3,4,5,6]
  const idList = articles.map(
    news => news.id
  )

  // Pre-build all the URI paths for existings & structure it like a URL param (as strings)
  const paths = idList.map(
    id => (
      { params: { articleId: id.toString() }}
    )
  )
  console.log(paths)

  return {
      paths,
      fallback:false
  }
}

export const getStaticProps = async (context) => {
  // Fetch the data (all the data)
  const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
  const articles = await response.json();

  // Store URL params id value
  const articleQuery = context.params.articleId;

  // Filter the articles array by the id (ONLY return the object with the corresponding ID)
  const articleMatch = articles.filter(
    article => article.id.toString() === articleQuery
  )

  return {
    props: {
      article: articleMatch[0]
    },
  };
};

export default ArticleDetailPage