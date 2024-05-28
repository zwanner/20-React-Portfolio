
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <Navigation />
        <Outlet />
      <Footer />
    </ChakraProvider>
  );
}

export default App;