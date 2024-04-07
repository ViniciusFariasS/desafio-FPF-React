import { useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import More from './pages/more';
import { useMediaQuery } from '@mui/material';

function App() {
  const isMobile = useMediaQuery('(max-width: 850px)');
  const [openMenu, setOpenMenu] = useState<boolean>(isMobile ? false : true);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className='content'>
        <BrowserRouter>
          <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div style={{ width: openMenu && !isMobile ? 'calc(100vw - 200px)' : '100%' }}>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/more" Component={More} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
