import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label}) => {
    const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={4}>
        <Controller 
        
        render={({field})=> (
            <TextField defaultValue={""} fullWidth name={name} label={label} required />
        )} control={control}  />
    </Grid>
  );
};

export default FormInput;
