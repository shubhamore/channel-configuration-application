import Sidebar from './components/Sidebar'
import Stepper from './components/Stepper'
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: '#F5F6FA', p: 3 }}
        >
          <Stepper />
        </Box>
      </Box>
    </div>
  );
}

export default App;
