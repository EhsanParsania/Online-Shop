import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MediaCard } from '../../../../components/index.components';
import { getData } from '../../../../api/API';
import { Spinner } from '../../../../components/index.components'
import { Divider } from '@material-ui/core';
import { wordToPersian } from '../../../../utils/convertNameToPersian';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
   
    margin: ' 20px',
    [theme.breakpoints.up('sm')]: {
      // display: 'block',
      minWidth: 1000,

      // minHeight: 450,
      // minheight: 'auto'

    },

  },
  rootContainer:{
    // backgroundColor: 'white-smock',
    borderRadius:5,
    // boxShadow:'0 5px 10px #666'
  },
  title: {
    fontSize: '1.4rem',
    // marginRight: '40px',
    marginBottom:50,
    color:"#777"

    // paddingRight:'10%' 
  },

  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    padding: 40
  },
  divider: {
    marginTop: 60,
    marginBottom: 30
    // paddingTop:20
  }

}));

function CardGroupContainer(props) {

  const [state, setState] = useState({ data: [{}] })
  const [loading, setLoading] = useState(true)

  useEffect(async () => {

    // set a new async function because in useEffect we cant use async request directly :  
    const fetchData = async () => {
      const field = props.field
      const pageNumber = 1
      const dataLimit = 6
      const { data } = await getData(field, pageNumber, dataLimit)
      setState({ data: data })
    }

    await fetchData()
    setLoading(false)
  }, [loading])


  const classes = useStyles();
  if (!loading) {
    return (
      <div className={classes.rootContainer}>
        <div className={classes.root}>

          <Grid container spacing={3}  >
            <h2 className={classes.title}>{wordToPersian(state.data[0].group)} </h2>
          </Grid>

          <Grid container spacing={3} justify='space-evenly' >
            {
              state.data.map((row) => {
                return <MediaCard key={row.id} {...row} />
              })
            }
          </Grid>

        </div>
        <Divider variant='middle' className={classes.divider} />
      </div>
    );
  }

  if (loading === true) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}  >
          <h2 className={classes.title}>{wordToPersian(state.data[0].group)} </h2>
        </Grid>

        <Grid container justify='center' >

          <Spinner />

        </Grid>
      </div>

    )
  }

}

export { CardGroupContainer }