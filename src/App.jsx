import reactLogo from './assets/react.svg'
import Index from './pages/Index'
import Oyamel from './pages/Oyamel'
import SushiMaki from './pages/SushiMaki'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/Index.css'
import Context from './pages/Context'

function App() {
   return (
      <>
         <div onSubmit={e =>{ e.preventDefault(); }}>
            <BrowserRouter>
               <Routes>
                  <Route exact path='*' element={<Index />} />
                  <Route exact path='/digitalmenu/sushi' element={<SushiMaki />} />
                  <Route exact path='/digitalmenu/burguers' element={<Oyamel />} />
                  <Route exact path='/digitalmenu/context' element={<Context />} />
               </Routes>
            </BrowserRouter>
         </div>
      </>
   )
}

export default App