import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export function SimpleSelectSubgroup(props) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();


  const handleChange = async (event, eventInfo) => {

    const subgroup = event.target.value
    const subgroupfa = eventInfo.props.children

    props.value({ subgroup, subgroupfa })

  };

  return (
    <div>

      <FormControl size='small' variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
        >
      
          <MenuItem value={'bread'}>نان</MenuItem>
          <MenuItem value={'rice'}>برنج</MenuItem>
          <MenuItem value={'oil'}>روغن </MenuItem>
          <MenuItem value={'sugar'}>شکر </MenuItem>
          
          <MenuItem value={'yogurt'}>ماست</MenuItem>
          <MenuItem value={'milk'}>شیر</MenuItem>
          <MenuItem value={'dough'}>دوغ </MenuItem>
          <MenuItem value={'butter'}>کره حیوانی و گیاهی  </MenuItem>

          <MenuItem value={'beef'}>گوشت گاو و گوساله</MenuItem>
          <MenuItem value={'chicken'}>گوشت مرغ</MenuItem>
          <MenuItem value={'egg'}>تخم مرغ </MenuItem>
          <MenuItem value={'fish'}>ماهی، میگو و خاویار </MenuItem>

          <MenuItem value={'coffee'}>قهوه</MenuItem>
          <MenuItem value={'coco'}>شکلات داغ</MenuItem>
          <MenuItem value={'tea'}>چای </MenuItem>
          <MenuItem value={'juice'}>آبمیوه </MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}