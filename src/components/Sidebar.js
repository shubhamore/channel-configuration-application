import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    bgcolor: '#04273A',
                    color: '#fff',
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <h2 style={{ margin: '20px' }}>React Test</h2>

            <Divider sx={{ borderColor: "#4F4F4F", borderWidth: '1.5px', width: "85%", margin: '0 auto', borderRadius: '5px' }} />
            
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GridViewOutlinedIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ background: 'rgba(44, 169, 227, 0.25)' }}>
                    <div style={{ height: "100%", width: '5px', background: '#2CA9E3', position: 'absolute' }}></div>
                    <ListItemButton>
                        <ListItemIcon>
                            <NoteAddOutlinedIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Montages'} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MonetizationOnOutlinedIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Credits'} />
                    </ListItemButton>
                </ListItem>
            </List>

            <Box sx={{ flex: '1 1 auto' }} />

            <Box sx={{ background: '#02354F', width: '80%', margin: "auto", padding: '25px 10px', borderRadius: '4px', marginBottom: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontWeight: '400' }}>1650</h1>
                <h5 style={{ fontWeight: '200' }}>Total Credits Available</h5>
            </Box>
        </Drawer>
    );
}
