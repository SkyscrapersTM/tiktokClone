import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'nicecode',
    description:
      'JKWJDK #peru #viral #humor #dvab #devueltaalbarrio #hashtag #famoso #ramdon #perupecausa🇵🇪 #xd #jajaja #gracioso #devueltaalbarriofans❤️❤️ Love You So- The King Khan & BBQ Show Love You So- The King Khan & BBQ',
    likes: 123,
    shares: 10,
    comments: 340,
    songTitle: 'sonido original - lil peep',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/57feef9a562af82f89140133316ca6e9~c5_100x100.jpeg?x-expires=1677445200&x-signature=t3ZImcK%2BylLYPjEBFCAeC9odVqM%3D',
    src: 'https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761'
  },
  {
    id: 2,
    author: 'nicecode',
    description:
      'JKWJDK #peru #viral #humor #dvab #devueltaalbarrio #hashtag #famoso #ramdon #perupecausa🇵🇪 #xd #jajaja #gracioso #devueltaalbarriofans❤️❤️ Love You So- The King Khan & BBQ Show Love You So- The King Khan & BBQ',
    likes: 123,
    shares: 20,
    comments: 140,
    songTitle: 'sonido original - lil peep',
    albumCover:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/57feef9a562af82f89140133316ca6e9~c5_100x100.jpeg?x-expires=1677445200&x-signature=t3ZImcK%2BylLYPjEBFCAeC9odVqM%3D',
    src: 'https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761'
  }
]

export default function () {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    )
  })
}
