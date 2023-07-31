import { PencilSimpleLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      
      <img className={styles.cover} src="https://images.unsplash.com/photo-1558544956-15f3c317e06a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=550&q=50"/>
      
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/brunoknop.png" />
        <strong>Bruno Gabriel Knop</strong>
        <span>Software Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    
    </aside>
  )
}