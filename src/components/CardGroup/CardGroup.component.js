import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Toolbar } from '@material-ui/core'
import { MediaCard, Paginate } from '../../components/index.components';

import { getData } from '../../api/API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor:'white'
    margin: ' 20px'
  },
  title: {
    fontSize: '1.5rem',
    marginRight: '40px',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingBottom: 70


  },
  paginateContainer: {
    paddingTop: 40
  }

}));




function CardGroup(props) {

  const [state, setState] = useState({ data: [{}] })

  useEffect(async () => {
    // const field = props.field || 'products'
    // const pageNumber = 1
    // const dataLimit = 6

    const { data } = await props.data
    setState({ data })

  }, [])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Toolbar /> */}
      <Paper className={classes.paper}  >

        <Grid container spacing={3}  >

          <h2 className={classes.title}>کالاهای گروه {props.groupName}</h2>

        </Grid>
        <Grid container spacing={3} justify='space-evenly' >

          {/* <Grid item sm={12}  > */}
          {/* <Paper className={classes.paper}  > */}

          {

            props.data.map((row) => {
              return <MediaCard
                key={row.id}
                image={row.image}
                title={row.name}
                price={row.price}
                information={row.name}
                group={row.group}
                subgroup={row.subgroup}
                id={row.id} />
            })
          }



          {/* </Paper> */}

          {/* </Grid> */}



        </Grid>
        <Grid container spacing={3} justify='center' className={classes.paginateContainer} >
          {props.children}
        </Grid>
      </Paper>


    </div>
  );
}

export { CardGroup }