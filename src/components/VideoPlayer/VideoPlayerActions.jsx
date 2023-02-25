import styles from './styles.module.css'
import Heart from '../Icons/Heart'
import { Comments } from '../Icons/Comments'
import { Share } from '../Icons/Share'

export default function VideoPlayerActions ({
  likes = 2041,
  comments = 333,
  shares = 30,
  hearted = false
}) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title='like'>{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comments />
        <strong title='comments'>{comments}</strong>
      </div>
      <div className={styles.action}>
        <Share />
        <strong title='share'>{shares}</strong>
      </div>
    </aside>
  )
}
