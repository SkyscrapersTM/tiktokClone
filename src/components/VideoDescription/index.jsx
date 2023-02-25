import SongTicker from '../SongTicker'
import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'

export default function VideoDescription ({
  albumImage,
  author,
  description,
  songTitle
}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <strong>
          <a className={styles.author} href={`/user/${author}`}>
            @{author}
          </a>
        </strong>
        <p className={styles.text}>{description}</p>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
    </footer>
  )
}
