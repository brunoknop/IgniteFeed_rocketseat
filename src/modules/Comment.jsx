import { Trash, HandsClapping } from '@phosphor-icons/react'
import styles from './Comment.module.css';

export function Comment () {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/vinibcandido.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Vinicius Candido</strong>
              <time title='31 de Julho de 2023' dateTime='2023-07-31 08:00:00'>Cerca de 2h atrás</time>
            </div>
            <button>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Bruno, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <HandsClapping size={20}/>
            Aplaudir <span>33</span>
          </button>
        </footer>
      </div>
    </div>
  )
}