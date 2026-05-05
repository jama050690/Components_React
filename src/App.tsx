import './App.css'
import Header from './components/Header.tsx'
import Main from './components/Main.tsx'
import Footer from './components/Footer.tsx'
import {Books} from './components/Books.tsx'

// Data
import { uzbek, english } from './data/books';


export function App({children}) {
  return (
    <>
      <Header name="Jamshiddin" />
      <Main>
        {/* 'books' propiga massivlarni uzatamiz */}
        <Books name="Uzbek Books" books={uzbek} />
        <Books name="English Books" books={english  } />
      </Main>
      <Footer name="Amazon" />
    </>
  )
}
export default App
