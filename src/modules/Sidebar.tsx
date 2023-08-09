import { PencilSimpleLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      
      <img className={styles.cover} src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=550&q=50"/>
      
      <div className={styles.profile}>
        <Avatar src='https://github.com/brunoknop.png' />
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