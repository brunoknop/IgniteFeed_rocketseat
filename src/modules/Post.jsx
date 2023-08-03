import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt}){
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar img={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title='24 de maio as 08:00' dateTime='2023-05-24 08:00:00'>Publicado a 1 hora</time>
      </header>

      <div className={styles.content}>
        {content.map(text => {
          if (text.type == 'paragraph') {
            return <p>{text.content}</p>
          }
          if (text.type == 'link') {
            return <a href="#">{text.content}</a>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback:</strong>
        <textarea placeHolder='Deixe um comentário'/>
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}