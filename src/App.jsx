import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Home';
import { Dogs } from './components/Dogs'
import { Cats } from './components/Cats';
import { Rabbits } from './components/Rabbits';
import { Donations } from './components/Donations';
import "../src/sass/App.scss";

function App() {

  return (
    <div className='container'>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Dogs' element={<Dogs/>}/>
            <Route path='/Cats' element={<Cats/>}/>
            <Route path='/Rabbits' element={<Rabbits/>}/>
            <Route path='/Donations' element={<Donations/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
