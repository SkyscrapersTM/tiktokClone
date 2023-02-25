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
  const handleLike = () => {
    window.alert('like')
  }
  const handleComment = () => {
    window.alert('comment')
  }
  const handleShare = () => {
    window.alert('share')
  }

  return (
    <aside className={styles.actions}>
      <div className={styles.action} onClick={handleLike}>
        <Heart />
        <span title='like'>{likes}</span>
      </div>
      <div className={styles.action} onClick={handleComment}>
        <Comments />
        <span title='comments'>{comments}</span>
      </div>
      <div className={styles.action} onClick={handleShare}>
        <Share />
        <span title='share'>{shares}</span>
      </div>
    </aside>
  )
}
