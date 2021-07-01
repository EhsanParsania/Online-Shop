import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from './EditProductsModal.module.scss'
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { UploadFile } from '../UploadFile/UploadFile.component'

import * as AXIOS from '../../../../../api/API'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '7px',
    width: '450px',
  },
  button: {
    cursor: 'pointer',
    color: 'darkblue'
  },


}));

export function EditProductsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({ image: '', name: '', branch: '', information: '' })

  const handlePostData = async () => {
    let bodyFormData = new FormData()
    bodyFormData.append('name', state.name)
    bodyFormData.append('information', state.information)
    bodyFormData.append('branch', state.branch)
    bodyFormData.append('image', state.image)

    await AXIOS.postProducts(bodyFormData)

  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <span onClick={handleOpen} className={classes.button} >
        ویرایش کالا
      </span>
      <Modal style={{overflow:'scroll'}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={style.modalHeader}  >
              <h3>  ویرایش کالا </h3>

              <CancelIcon onClick={handleClose} className={style.cancelIcon} />

            </div>

            <p>تصویر کالا</p>
            <UploadFile image={(image) => setState({ ...state, image })}  defaultValue={props.imageName} />

            <p>نام کالا</p>
            <BasicTextFields value={(value) => setState({ ...state, name: value })} defaultValue={props.name} />

            <p> دسته بندی</p>
            <SimpleSelect value={(value) => setState({ ...state, branch: value })} />

            <p>  توضیحات </p>
            <TextArea value={(value) => setState({ ...state, information: value })} />

            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Button onClick={handlePostData} variant="contained" color="primary" style={{ width: '100px', marginTop: '10px' }}>
                ذخیره
              </Button>
            </div>


          </div>
        </Fade>
      </Modal>
    </div>
  );
}





export default function BasicTextFields(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
  }));
  const classes = useStyles();
  const handleChange = (event) => {
    props.value(event.target.value)
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField onChange={handleChange} fullWidth id="outlined-basic" fullWidth variant="outlined" size='small' defaultValue={props.defaultValue} />

    </form>
  );
}





function SimpleSelect(props) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);

    props.value(event.target.value)

  };

  return (
    <div>

      <FormControl size='small' variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
        // label="Age"
        >
           <MenuItem value="">
            <em>گروه محصول</em>
          </MenuItem>
          <MenuItem value={10}>کالاهای اساسی و خوار و بار</MenuItem>
          <MenuItem value={20}>کالاهای اساسی و خوار و بار</MenuItem>
          <MenuItem value={30}>کالاهای اساسی و خوار و بار</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}


function TextArea(props) {
  const handleChange = (event) => {
    const value = event.target.value
    props.value(value)
  }

  return (
    <textarea className={style.textArea} onChange={handleChange} />
  )
}

