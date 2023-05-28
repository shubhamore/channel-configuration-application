import React from 'react'
import Box from '@mui/material/Box';

export default function StepOne() {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#fff', height: '350px', margin: '25px 0', borderRadius: '8px', padding: '20px' }}>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ backgroundColor: '#F8F8F8', height: '100%', border: '1.5px dashed #8A8A8A', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src={require('../assets/file.png')} alt='file icon' />
                <button style={{ borderRadius: '5px', padding: '10px', color: '#6D6D6D', border: '1px solid', borderColor: '#8A8A8A', outline: 'none', margin: '15px 0 7.5px 0' }}>Browse Files</button>
                or drop files here
            </Box>
        </Box>
    )
}
