import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import style from './ToggleButton.module.scss'
import { Link, NavLink } from 'react-router-dom'

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

      <NavLink to='/panel/products' className={style.link} activeClassName={style.active}>
        <ToggleButton value="" aria-label="right" className={style.toggleButton}  >
          کــــالاهــا
        </ToggleButton>
      </NavLink>
      <NavLink to='/panel/quantity' className={style.link} activeClassName={style.active}>

        <ToggleButton value="center" aria-label="centered" className={style.toggleButton}>
          موجودی و قیمت
        </ToggleButton>
      </NavLink>
      <NavLink to='/panel/orders' className={style.link} activeClassName={style.active}>
        <ToggleButton value=" " aria-label="left" className={style.toggleButton}>
          سفارش‌ها
        </ToggleButton>
      </NavLink>


    </ToggleButtonGroup>
  );
}
