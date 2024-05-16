import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './ArticleItem.module.scss'
import ButtonLink from '@/components/common/ButtonLink';
import Button from '@/components/common/Button';
import Card from "@/components/common/Card";

function ArticleItem({ id, title, description, url, image, urlToImage, category }) {
  // Prog navigation
  const router = useRouter();
  function handleNavigate(){
    router.push('/' + id);
  }

  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>

        <div className={styles.imageBox}>
          <Image 
            src={image ? image : urlToImage} 
            alt={title} 
            fill={true}
            sizes="(max-width: 768) 100vw, 50vw"
          />
        </div>

        <div className={styles.articleContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
      { image ? 
        <Button onClick={handleNavigate}>
          Show Details
        </Button> 
      :
        <ButtonLink path={url} target="_blank">
          Link to Article
        </ButtonLink>
      }
      </div>
    </Card>
  );
}


export default ArticleItem;