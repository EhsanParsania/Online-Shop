import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


import {SimpleRating} from '../index.components'


import { BASE_URL } from '../../api/Variables.api';

const useStyles = makeStyles({
  root: {
    width: 350,
    // padding:'15px',
    marginTop: '20px',
    height: 160,


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
    minWidth: 230,
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
    
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



  const classes = useStyles();

  return (
    <Link to={`/home/products/${props.group}/${props.subgroup}/${props.id}`} className={classes.link}>
      <Card className={classes.root} raised='true' >
        <CardActionArea className={classes.CardActionArea} >
          <CardMedia
            className={classes.media}
            image={`${BASE_URL}${props.image}`}
            title={props.name}
          />
          <CardContent className={classes.content} >
            <Typography gutterBottom variant="p" component="h4" className={classes.title}>
              {props.name}
            </Typography>

            <SimpleRating />


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




