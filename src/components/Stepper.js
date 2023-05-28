import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';

const steps = [`Upload EDF's`, `Map Channels`, `Save & Preview`];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box sx={{ width: '95%', margin: '20px auto',marginTop:'0',display:'flex',justifyContent:'space-between' }}>
                <h1 style={{display:'inline-block'}}>Test_Study</h1>
                <div style={{display:'inline-block'}}>
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <AccountCircleIcon />
                        Ankit Brijwasi
                        <ArrowDropDownIcon />
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </Box>
            <Box sx={{ width: '95%', margin: 'auto' }}>
                <Stepper activeStep={activeStep} alternativeLabel sx={{ bgcolor: '#fff', padding: '2.5% 12.5%', margin: 'auto', borderRadius: '8px' }}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        return (
                            <Step key={label} {...stepProps} sx={{
                                '& .Mui-active .MuiStepConnector-line': {
                                    border: '1.25px solid #10A44B', // line color (active)
                                },
                                '& .Mui-completed .MuiStepConnector-line': {
                                    border: '1.25px solid #10A44B', // line color (completed)
                                },
                                '& .MuiStepLabel-root .Mui-completed': {
                                    color: '#10A44B', // circle color (COMPLETED)
                                },
                                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                                {
                                    color: '#10A44B', // Just text label (COMPLETED)
                                },
                                '& .MuiStepLabel-iconContainer.Mui-disabled svg': {
                                    color: '#fff', // circle color (INACTIVE)
                                    border: '1px solid grey',
                                    borderRadius: '50%',
                                },
                                '& .MuiStepLabel-root .Mui-active': {
                                    color: '#fff', // circle color (ACTIVE)
                                },
                                '& .Mui-active.MuiStepLabel-iconContainer': {
                                    color: '#fff', // circle color (ACTIVE)
                                    border: '2px solid #10A44B',
                                    borderRadius: '50%',
                                },
                                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                                {
                                    color: '#10A44B', // Just text label (ACTIVE)
                                },
                                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                    fill: '#10A44B', // circle's number (ACTIVE)
                                },
                                '& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text': {
                                    fill: 'grey', // circle's number (disabled)
                                },
                            }}>
                                <StepLabel >{label} </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/* <Box sx={{width:'100%',backgroundColor:'#fff',height:'350px',margin:'25px 0',borderRadius:'8px',padding:'20px'}}>
                        <Box sx={{backgroundColor:'#F8F8F8',height:'100%',border:'1.5px dashed #8A8A8A',borderRadius:'5px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <img src={require('../assets/file.png')} alt='file icon'/>
                            <button style={{borderRadius:'5px',padding:'10px',color:'#6D6D6D',border:'1px solid',borderColor:'#8A8A8A',outline:'none',margin:'15px 0 7.5px 0'}}>Browse Files</button>
                            or drop files here
                        </Box>
                    </Box> */}
                        {activeStep === 0 && <StepOne />}
                        {activeStep === 1 && <StepTwo />}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, backgroundColor: '#fff', borderRadius: '8px', padding: '7.5px 15px', marginTop: '10px' }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1, borderRadius: "8px", border: '1px solid', borderColor: activeStep === 0 ? 'rgba(0,0,0,0.23)' : '#000000', padding: '5px 32px' }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />

                            <Button onClick={handleNext} sx={{ background: activeStep === steps.length - 1 ? '#10A44B' : '#2F7EC7', borderRadius: '8px', padding: '5px 32px', color: '#fff', fontWeight: '500', '&:hover': { background: activeStep === steps.length - 1 ? '#38ba6c' : '#4295e2' } }}>
                                {activeStep === steps.length - 1 ? 'Save' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </React.Fragment>
    );
}