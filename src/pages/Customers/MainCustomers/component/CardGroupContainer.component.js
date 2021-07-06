import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Toolbar } from '@material-ui/core'
import { MediaCard, Paginate } from '../../../../components/index.components';
import { getData } from '../../../../api/API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor:'white'
    margin: ' 20px'
  },
  title: {
    fontSize: '1.5rem',
    marginRight: '40px',
    // paddingRight:'10%' 
  },

  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    padding:40


  },

}));

function CardGroupContainer(props) {

  const [state, setState] = useState({ data: [{}] })

  useEffect(async () => {
    const field = props.field
    const pageNumber = 1
    const dataLimit = 6

    const { data } = await getData(field, pageNumber, dataLimit)
    setState({ data })

  }, [])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Toolbar /> */}
        {/* <Paper className={classes.paper}  > */}

      <Grid container spacing={3}  >

        <h2 className={classes.title}>کالاهای گروه {props.groupName}</h2>

      </Grid>
      <Grid container spacing={3} justify='space-evenly' >

        {/* <Grid item sm={12}  > */}
        {/* <Paper className={classes.paper}  > */}


        {
          // console.log(props.rows)
          state.data.map((row) => {
            return <MediaCard key={row.id} image={row.image} subgroup={row.subgroup}  title={row.name} price={row.price} information={row.information} id={row.id} />
          })
        }
      


        {/* </Paper> */}

        {/* </Grid> */}



      </Grid>
      {/* </Paper> */}


    </div>
  );
}

export { CardGroupContainer }