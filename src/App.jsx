import { Header } from "./modules/Header";
import { Post } from "./modules/Post";
import style from './App.module.css';
import { Sidebar } from "./modules/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            avatar='https://github.com/brunoknop.png'
            author='Bruno Gabriel Knop'
            content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptates temporibus eaque delectus sed, optio odio accusantium inventore explicabo aliquid rem, laborum quis deserunt impedit facilis! Ducimus facere voluptas dolorum!'
          />
          <Post
            avatar='https://github.com/vinibcandido.png'
            author='Vinicius Candido'
            content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptates temporibus eaque delectus sed, optio odio accusantium inventore explicabo aliquid rem, laborum quis deserunt impedit facilis! Ducimus facere voluptas dolorum!'
          />
        </main>
      </div>
    </>
  )
}

