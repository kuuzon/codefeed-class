import styles from './Hero.module.scss'

const Hero = ({ title, description, bgImage }) => {
  return (
    <div 
      className={styles.showcase}
      style={{ 
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className={styles.overlay}>
        <h1><span>{title}</span>feed</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Hero