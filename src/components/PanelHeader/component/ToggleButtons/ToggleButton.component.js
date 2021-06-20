import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import classes from './ToggleButton.module.scss'

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');


  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >

      <ToggleButton value="" aria-label="right" className={classes.toggleButton}  >
        کــــالاهــا
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered" className={classes.toggleButton}>
        موجودی و قیمت
      </ToggleButton>
      <ToggleButton value=" " aria-label="left" className={classes.toggleButton}>
      سفارش‌ها
      </ToggleButton>

    </ToggleButtonGroup>
  );
}
