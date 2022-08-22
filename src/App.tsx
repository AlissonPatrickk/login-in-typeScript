import './App.css';
import { Box, ButtonGroup, Button } from '@mui/material';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Private } from './pages/Private';
import { Acess } from './pages/Acess';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');

  }

  return (
    <Box className="App">

      <Box className='Header-App'>
      <header >
        <h1>header</h1>
        <nav>
          {auth.user &&
            <Box>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button href='/'>Acess</Button>
                <Button href='/private'>Privado</Button>
                <Button href='/' onClick={handleLogOut} >Sair</Button>
              </ButtonGroup>
            </Box>
          }
        </nav>
      </header>
      </Box>

      <Box className='Body-App'>
        <Routes>
          <Route path="/" element={<RequireAuth><Acess /></RequireAuth>} />
          <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
        </Routes>
      </Box>


    </Box>
  );
}

export default App;
