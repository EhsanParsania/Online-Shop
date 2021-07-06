import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BASE_URL } from '../../../api/Variables.api';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { TextField } from '@material-ui/core';

import { StoreHeader } from '../../../components/index.components';
import { Toolbar } from '@material-ui/core'





const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    // height:'100%',
    padding: 15,
    margin: 20,
  },
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  topContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
    cursor: 'unset',
    
  },
  image: {
    width: 400,
    height: 400,
  },
  leftContent: {
    display: 'flex',
    // justifyContent:'space-evenly'
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',

  },
  inputNumber: {
    marginLeft: 10
  }
});

export function ProductDetails() {
  const classes = useStyles();

  return (
    <StoreHeader style={{flexDirection:'column'}}>
      <Toolbar/>
    <Card className={classes.root} raised={true}>
      <div className={classes.topContent} >

        <CardMedia className={classes.image}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`${BASE_URL}/files/4c510049903eb0bef26b53ca8cf84994`}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.leftContent} >
          <Typography gutterBottom variant="h5" component="h2" >
            کالای فلان
          </Typography>
          <BreadCrumb />
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <div className={classes.buttonContainer} >

            <Button variant='contained' color="secondary">
              افزودن به سبد خرید
            </Button>
            <InputNumber />
          </div>
        </CardContent>
      </div>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </StoreHeader>
  );
}





const useStyles$ = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));



function BreadCrumb() {
  const classes = useStyles$();

  return (
    <div className={classes.root}>

      <Breadcrumbs separator={<ArrowBackIosSharpIcon fontSize="small" />} aria-label="breadcrumb">
        <Link className={classes.link} to="/" >
          فروشگاه
        </Link>
        <Link className={classes.link} to="/getting-started/installation/" >
          خوار و بار
        </Link>
        <Typography color="textSecondary">نان</Typography>
      </Breadcrumbs>
    </div>
  );
}

function InputNumber(props) {

  const onChange = (event) => {
    const value = event.target.value
    props.onChange(value)
  }

  return (
    <TextField
      type='number'
      variant='outlined'
      // value={1}
      // color='secondary'
      defaultValue={1}
      onChange={onChange}
    // min={1}
    // max={100}
    />
  )
}
