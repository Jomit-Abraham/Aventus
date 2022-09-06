import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import CreateUser from './components/CreateUser';
import ShowUser from './components/ShowUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <ChakraProvider>
      <Box w='100%' h='100%' bgGradient='linear(to-r, gray.800, gray.400)' display='grid' >
        <CreateUser />
        <UpdateUser />
        <ShowUser />
      </Box>
    </ChakraProvider>
  );
}

export default App;
