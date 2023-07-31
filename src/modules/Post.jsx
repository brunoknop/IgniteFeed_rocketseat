import styles from './Post.module.css';

export function Post(props){
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.avatar}/>
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time title='24 de maio as 08:00' dateTime='2023-05-24 08:00:00'>Publicado a 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">{' '}jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto</a>{' '}
           <a href="#">#nlw</a>{' '}
           <a href="#">#rocketseat</a></p>
      </div>

    </article>

  )
}