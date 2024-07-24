import Hero from './components/2-Hero/Hero'
import Header from './components/1-Header/Header'
import Main from './components/3-Main/Main'
import Footer from './components/5-Footer/Footer'
import Contact from './components/4-Contact/Contact'

function App() {

  return (
    <div id='up' className='container'>
     <Header />
     <Hero />
     <div className='divider' />
     <Main />
     <div className='divider' />
     <Contact />
     <div className='divider' />
     <Footer />

     <a href='#up'>
     <button className='scroll2top icon-arrow-right'></button>
     </a>
    </div>
  )
}

export default App
