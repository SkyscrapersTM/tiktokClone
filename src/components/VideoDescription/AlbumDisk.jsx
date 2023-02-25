import styles from './styles.module.css'

export default function ({ albumImage }) {
  return (
    <div className={styles.album}>
      <img src={albumImage} alt='album image' />
    </div>
  )
}
