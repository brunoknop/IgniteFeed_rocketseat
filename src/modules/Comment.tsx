import { Trash, HandsClapping } from '@phosphor-icons/react'
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


interface PropsComment {
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment ({ content, onDeleteComment}: PropsComment) {
  
  const [clapCount, setClapCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleAddNewClap(){
    setClapCount(clapCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/vinibcandido.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Vinicius Candido</strong>
              <time title='31 de Julho de 2023' dateTime='2023-07-31 08:00:00'>Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleAddNewClap}>
            <HandsClapping size={20}/>
            Aplaudir <span>{clapCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}