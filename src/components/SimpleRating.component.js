import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


export function SimpleRating(props) {
  const [value, setValue] = React.useState(2);
  const randomRate = Math.floor(Math.random() * 5) + 1


  return (
    <div dir='ltr'>
      <Box component="fieldset" borderColor="transparent"  >
        {/* <Typography component="legend">امتیاز کالا</Typography> */}
        <Rating
          size='small'
          name="simple-controlled"
          value={randomRate}
          readOnly
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

    </div>
  );
}