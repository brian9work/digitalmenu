import Index from './pages/Index'
import Oyamel from './pages/Oyamel'
import SushiMaki from './pages/SushiMaki'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/style.css'
import Context from './pages/Context'

function App() {
   return (
      <>
         <div onSubmit={e =>{ e.preventDefault(); }}>
            <BrowserRouter basename='/digitalmenu'>
               <Routes>
                  <Route exact path='*' element={<Index />} />
                  <Route exact path='/sushi' element={<SushiMaki />} />
                  <Route exact path='/burguers' element={<Oyamel />} />
                  <Route exact path='/context' element={<Context />} />
               </Routes>
            </BrowserRouter>
         </div>
      </>
   )
}

export default App