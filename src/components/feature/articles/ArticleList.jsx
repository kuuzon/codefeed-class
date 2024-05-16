import Container from "@/components/common/Container"
import ArticleItem from "./ArticleItem"

const ArticleList = (props) => {
  return (
    <Container>
      {props.articles.map((article) => (
        <ArticleItem 
          key={article.id ? article.id : article.title} 
          id={article.id ? article.id : article.title}
          title={article.title}
          description={article.description}
          category={article.category ? article.category : ""}
          image={article.image}
          urlToImage={article.urlToImage}
          url={article.url}
        />
      ))}
    </Container>
  )
}

export default ArticleList