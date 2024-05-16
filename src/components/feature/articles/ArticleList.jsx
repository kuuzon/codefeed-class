import Container from "@/components/common/Container"
import ArticleItem from "./ArticleItem"

const ArticleList = (props) => {
  return (
    <Container>
      {props.articles.map((article) => (
        <ArticleItem 
          key={article.title} 
          id={article.title}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          url={article.url}
        />
      ))}
    </Container>
  )
}

export default ArticleList