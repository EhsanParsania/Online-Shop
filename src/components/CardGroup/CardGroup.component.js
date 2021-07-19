import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MediaCard } from '../../components/index.components';
import { wordToPersian } from '../../utils/convertNameToPersian';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: '1.5rem',
    marginRight: '40px',
    marginBottom: 45
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingBottom: 30,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      minWidth: 1230,
      minHeight: 550,
    },
  },
  container_: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 550
  },
  paginateContainer: {
    paddingTop: 40
  }
}));




function CardGrouppp(props) {

  const [state, setState] = useState()

  useEffect(async () => {

    // get data from props ( from product list page or ...)
    const data = await props.data
    await setState(data)

  }, [state, props])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Toolbar /> */}
      {state &&
        <Paper className={classes.paper}  >
          <div className={classes.container_}>
            <div>

              <Grid container spacing={3}  >

                <h2 className={classes.title}> {wordToPersian(state[0].subgroup)}</h2>

              </Grid>
              <Grid container spacing={3} justify='space-evenly' >

                {

                  props.data.map((row) => {
                    return <MediaCard
                      key={row.id}
                      {...row}
                    />
                  })
                }

              </Grid>
            </div>

            <div>
              <Grid container spacing={3} justify='center' className={classes.paginateContainer} >
                {props.children}
              </Grid>
            </div>

          </div>
        </Paper>
      }
    </div>
  );
}

const CardGroup = withRouter(CardGrouppp)
export { CardGroup }