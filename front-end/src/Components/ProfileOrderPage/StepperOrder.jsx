import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Placed', 'Order Confimed', 'Shipped', 'Out Of Delivery', 'Delivered'];

export default function StepperOrder() {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <>
     <div className='py-[3rem] grid grid-cols-3 items-center max-[800px]:hidden'>
      <Box sx={{ width: '100%' }} className='col-span-2 max-[800px]:hidden'>
      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 , justifyContent: 'space-between'}}>
          </Box>
        </React.Fragment>
      )}
    </Box>
    <div className="button flex justify-end max-[800px]:justify-start">
        <button className='text-[12px] font-medium text-primary uppercase'>cancal Order</button>
    </div>
    </div>
    </>
   
  );
}
