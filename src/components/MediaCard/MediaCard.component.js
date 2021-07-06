import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { getData } from '../../api/API';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



import { BASE_URL } from '../../api/Variables.api';

const useStyles = makeStyles({
  root: {
    width: 350,
    // padding:'15px',
    marginTop: '20px',
    height: 160

  },
  media: {
    minHeight: 100,
    minWidth: 100,
    border: '1px solid #eee',
    borderRadius: '10px',
    boxShadow: '0 0 10px #eee',


  },
  CardActionArea: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px'
  },
  content: {
    minWidth: 230
  },
  link: {
    textDecoration: 'none'
  },
  title: {
    // minHeight: 35
    fontSize: 14
  }
});

function MediaCard(props) {

  // const randomRate = () => {
  //   const rate = Math.floor(Math.random()*4)+1 
  //   console.log(rate)
  //   return rate
  // }

  const randomRate = Math.floor(Math.random() * 5) + 1


  const classes = useStyles();

  return (
    <Link to={`/home/products/${props.subgroup}/${props.title}`} className={classes.link}>
      <Card className={classes.root} raised='true' >
        <CardActionArea className={classes.CardActionArea} >
          <CardMedia
            className={classes.media}
            image={`${BASE_URL}${props.image}`}
            title={props.information}
          />
          <CardContent className={classes.content} >
            <Typography gutterBottom variant="p" component="h4" className={classes.title}>
              {props.title}
            </Typography>

            <SimpleRating rate={randomRate} />


            <Typography variant="body2" color="textSecondary" component="p">
              {props.price}  تومان
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </Link>
  );
}


export { MediaCard }



function SimpleRating(props) {
  const [value, setValue] = React.useState(2);

  return (
    <div dir='ltr'>
      <Box component="fieldset" mt={1} mb={2} borderColor="transparent"  >
        {/* <Typography component="legend">امتیاز کالا</Typography> */}
        <Rating
          size='small'
          name="simple-controlled"
          value={props.rate}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

    </div>
  );
}
