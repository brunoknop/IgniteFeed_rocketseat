import { Header } from "./modules/Header";
import { Post, PostType } from "./modules/Post";
import style from './App.module.css';
import { Sidebar } from "./modules/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brunoknop.png',
      name: 'Bruno Knop',
      role: 'Front-end developer'
    },
    content: [
      {type: "paragraph", content: 'Fala galeraa 👋'},
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-29 22:45:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/vinibcandido.png',
      name: 'Vinicius Candido',
      role: 'Back-end developer'
    },
    content: [
      {type: "paragraph", content: 'Fala galeraa 👋'},
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-08-03 13:58:00')
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

