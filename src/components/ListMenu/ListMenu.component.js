import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ListSubheader } from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Yekan from '../../asset/font/Yekan.ttf'

import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  fontFamily: Yekan
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    left: 'auto',
    right: 0,

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: ''
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
      width: 0,
      // margin: '0 20px',
      // padding: 5,
      // marginTop: 2
    },

  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerContainer: {
    overflow: 'auto',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  subHeader: {
    color: '#222',
    fontWeight: 600,
    margin: 0,
    fontSize:16
    // padding:0
  },
  inline: {
    margin: 0,
    padding: 0
  },
  text: {
    margin: 0,
    padding: 0,
    color:'#666'
  },
  list: {
    margin: 0,
    padding: 0
  },
  listItem: {
    padding: '0 15px'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  }

}));

function ListMenu(props) {
  const classes = useStyles();

  return (

    <div className={classes.root} >

      <ThemeProvider theme={theme}>
        <div dir='rtl'>

          <CssBaseline />

          <StylesProvider jss={jss}>


            <Drawer
              // anchor="right"
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>



                <List className={classes.list} disableTypography={true}>
                  <ListSubheader className={classes.subHeader} >

                    <span style={{ backgroundColor: 'white' }}>  کالاهای اساسی و خوار و بار </span>

                  </ListSubheader>

                  <Link className={classes.link} to='/home/groceries/bread/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button  >
                      <ListItemText disableTypography={true} className={classes.text}  >
                        نان
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/rice/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        برنج
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/oil/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        روغن
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/sugar/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        قند و نبات
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>




                <List className={classes.list} disableTypography={true}>
                  <ListSubheader className={classes.subHeader} >

                    <span style={{ backgroundColor: 'white' }}> لبنیات </span>

                  </ListSubheader>

                  <Link className={classes.link} to='/home/groceries/bread/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button  >
                      <ListItemText disableTypography={true} className={classes.text}  >
                        شیر
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/rice/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        کره حیوانی و گیاهی
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/oil/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        ماست
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/sugar/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        دوغ
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>




                <List className={classes.list} disableTypography={true}>
                  <ListSubheader className={classes.subHeader} >

                    <span style={{ backgroundColor: 'white' }}> محصولات پروتئینی</span>

                  </ListSubheader>

                  <Link className={classes.link} to='/home/groceries/bread/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button  >
                      <ListItemText disableTypography={true} className={classes.text}  >
                        گوشت گاو و گوساله
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/rice/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        گوشت مرغ
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/oil/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        تخم مرغ
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/sugar/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        ماهی، میگو و خاویار
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>





         


                <List className={classes.list} disableTypography={true}>
                  <ListSubheader className={classes.subHeader} >

                    <span style={{ backgroundColor: 'white' }}> نوشیدنی</span>

                  </ListSubheader>

                  <Link className={classes.link} to='/home/groceries/bread/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button  >
                      <ListItemText disableTypography={true} className={classes.text}  >
                      قهوه
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/rice/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                      نسکافه و هات چاکلت
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/oil/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                      چای
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/sugar/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                      شربت و آبمیوه
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>








                <List className={classes.list} disableTypography={true}>
                  <ListSubheader className={classes.subHeader} >

                    <span style={{ backgroundColor: 'white' }}> نوشیدنی</span>

                  </ListSubheader>

                  <Link className={classes.link} to='/home/groceries/bread/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button  >
                      <ListItemText disableTypography={true} className={classes.text}  >
                      قهوه
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/rice/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                      نسکافه و هات چاکلت
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/oil/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                      چای
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/sugar/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                      شربت و آبمیوه
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>






                <List className={classes.list} disableTypography={true}>
                  <ListSubheader className={classes.subHeader} >

                    <span style={{ backgroundColor: 'white' }}>  کالاهای اساسی و خوار و بار </span>

                  </ListSubheader>

                  <Link className={classes.link} to='/home/groceries/bread/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button  >
                      <ListItemText disableTypography={true} className={classes.text}  >
                        نان
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/rice/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        برنج
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/oil/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        روغن
                      </ListItemText>
                    </ListItem>
                  </Link>

                  <Link className={classes.link} to='/home/groceries/sugar/1' >
                    <ListItem className={classes.listItem} alignItems={'start'} dense={'true'} button >
                      <ListItemText disableTypography={true} className={classes.text}>
                        قند و نبات
                      </ListItemText>
                    </ListItem>
                  </Link>
                </List>






              </div>
            </Drawer>

          </StylesProvider>
        </div>
      </ThemeProvider>


      <main className={classes.content}>
        <Toolbar />

        {props.children}

      </main>
    </div>
  );
}




export { ListMenu }