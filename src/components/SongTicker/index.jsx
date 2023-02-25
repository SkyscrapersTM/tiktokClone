import MusicIcon from '../Icons/MusicIcon'
import styles from './styles.module.css'

export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <div className={styles.marquee}>
        <MusicIcon />
        {songTitle}
      </div>
    </div>
  )
}
