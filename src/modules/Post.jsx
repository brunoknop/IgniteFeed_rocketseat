import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import ptBr from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { useState } from 'react';

const comments = [ ,3]

export function Post({author, content, publishedAt}){

  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })
  
  const publishedDateFormattedFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(){
    if(newCommentText) {
      setComments([...comments, newCommentText])
    }
    setNewCommentText('')
  }

  function handleNewCommentText() {
    setNewCommentText(event.target.value)
  }

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
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateFormattedFromNow}</time>
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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback:</strong>
        <textarea
          onChange={handleNewCommentText} 
          name='comment'
          placeHolder='Deixe um comentário'
          value={newCommentText}
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  )
}