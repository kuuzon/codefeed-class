import Image from 'next/image';
import ButtonLink from '@/components/common/ButtonLink';

import styles from './ArticleItem.module.scss'
import Card from "@/components/common/Card";

function ArticleItem({ id, title, description, url, urlToImage }) {
  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>

        <div className={styles.imageBox}>
          <Image 
            src={urlToImage} 
            alt={title} 
            width={650}
            height={300}
          /> 
        </div>

        <div className={styles.articleContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        <ButtonLink path={url} target="_blank">
          Link to Article
        </ButtonLink>
      </div>
    </Card>
  );
}


export default ArticleItem;