import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import ptBr from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { useState } from 'react';

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
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentText() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(deletedComment) {
    var newCommentListWithoutDeletedOne = comments.filter(comment => {
      return comment !== deletedComment
    })
    setComments(newCommentListWithoutDeletedOne)
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={text.content}>{text.content}</p>
          }
          if (text.type == 'link') {
            return <p key={text.content}><a href="#">{text.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback:</strong>
        <textarea
          onChange={handleNewCommentText} 
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        })}
      </div>
    </article>
  )
}