import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import OrderSummary from './OrderSummery/OrderSummary';
import DeveleryForm from './DeleveryAdressForm/DeveleryForm';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const steps = ['Login', 'Add Delevery Address', 'Order Summery', 'Payment Method'];

export default function Stepper_bar() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const QuerySearch = new URLSearchParams(location.search)

  const step = QuerySearch.get("step")

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
    <Navbar/>
     <div className='lg:px-20 px-[1rem] py-[3rem] max-[750px]:py-[1.5rem]'>
      <Box sx={{ width: '100%'}}>
        <div className="max-[750px]:hidden">
      <Stepper activeStep={step} sx={{fontSize: "10px",}} className='max-[750px]:hidden'>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        </div>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 , justifyContent: 'space-between'}}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          </Box>
          <div className="cart_delevery_items">
            {
              step == 2? <DeveleryForm/> : <OrderSummary/>
            }
          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
    <Footer/>
    </>
   
  );
}
