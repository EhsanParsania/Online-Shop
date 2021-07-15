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
    // margin: ' 20px'
  },
  title: {
    fontSize: '1.5rem',
    marginRight: '40px',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingBottom: 30,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      // display: 'block',
      minWidth: 1230,

      minHeight: 550,

    },
  },
  container_: {
    display: 'flex',
    // flex: 1,s
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 550
  }
  ,

  paginateContainer: {
    paddingTop: 40
  }

}));




function CardGrouppp(props) {

  const [state, setState] = useState()

  useEffect(async () => {
    // const field = props.field || 'products'
    // const pageNumber = 1
    // const dataLimit = 6

    const data = await props.data
    await setState(data)
    console.log(state)

  }, [state, props])

  const classes = useStyles();




  //  const  handleGetData = async () => {
  //     const { group,subgroup,id=1 } = props.match.params  // this dhould get from props later  
  //     const limit = 6

  //     try {
  //       const { data = [{}], headers } = await getFilteredProducts(group, subgroup, limit, id)
  //       const totalCount = headers ? headers['x-total-count'] : 1
  //       const numberOfPages = Math.ceil(totalCount / limit)
  //       console.log(numberOfPages)
  //       // await this.setState({ data, numberOfPages, pageNumber: id, subgroup: subgroup })
  //       s
  //     }
  //     catch (error) {
  //       console.log('get data failed with error ==> ', error.message)
  //     }
  //   }


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