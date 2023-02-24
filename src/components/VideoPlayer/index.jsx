import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC =
  'https://vod-progressive.akamaized.net/exp=1677278477~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3514%2F13%2F342571552%2F1369898524.mp4~hmac=e1460e49f29038147fe78d244db5b5e462abad59a93543663b74c4bdcaccfe08/vimeo-prod-skyfire-std-us/01/3514/13/342571552/1369898524.mp4'

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video className={styles.video} src={SRC} controls={false} ref={video} />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
