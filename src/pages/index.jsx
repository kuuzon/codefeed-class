import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '@/components/layout/Hero';
import ArticleList from '@/components/feature/articles/ArticleList';

function HomePage({ articles }) {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | Home</title>
        <meta 
          name='description'
          description='Browse all the coding news of today from around the globe'
        />
      </Head>

      <Hero 
        title='Code'
        description='Catch up on all the coding news from around the globe!'
        bgImage='/backgrounds/hero-code.webp'
      />
      {/* Custom API Articles */}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </Fragment>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      articles: data
    },
    revalidate: 60 * 60
  };
};

export default HomePage;