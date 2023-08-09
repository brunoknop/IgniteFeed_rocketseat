import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import ptBr from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  content: string
  type: 'paragraph' | 'link';
}

export interface PostType {
  id: number
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType
}

export function Post({post}: PostProps){

  const [comments, setComments] = useState(['primeiro comentário'])
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })
  
  const publishedDateFormattedFromNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(deletedComment: string) {
    var newCommentListWithoutDeletedOne = comments.filter(comment => {
      return comment !== deletedComment
    })
    setComments(newCommentListWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateFormattedFromNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map(text => {
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