import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from './AddProductsModal.module.scss'
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { UploadFile } from '../UploadFile/UploadFile.component'
import * as AXIOS from '../../../../../api/API'
import { toast } from 'react-toastify';


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
    width: '450px'
  },
  button: {
    cursor: 'pointer',
    color: 'darkblue'
  },
  addButton: {
    width: 100
  },
  title:{
    margin:0
  }


}));

export function AddProductsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({ image: '', name: '', group: '', information: '', groupfa: '' })

  const handlePostData = async () => {
    let bodyFormData = new FormData()
    bodyFormData.append('name', state.name)
    bodyFormData.append('information', state.information)
    bodyFormData.append('group', state.group)
    bodyFormData.append('subgroup', state.subgroup)
    bodyFormData.append('image', state.image)
    bodyFormData.append('price', state.price)
    bodyFormData.append('supply', state.supply)


    try {
      await AXIOS.postProducts(bodyFormData)
      handleClose()
      props.isRerender('yes')
      toast.success(<p dir='rtl'> &emsp;<strong> ✔ </strong> &ensp;افزودن کالا با موفقیت انجام شد    </p>, {
        position: "bottom-left",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    catch (error) {
      toast.error(<p>{error.message}</p>, {
        position: "bottom-left",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      {/* <p onClick={handleOpen} className={classes.button} >
        افزودن کالا
      </p> */}
      <Button className={classes.addButton} onClick={handleOpen} color='primary' variant='contained' >
        افزودن کالا
      </Button>
      <Modal style={{ overflow: 'scroll' }}
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
              <h3>  افزودن کالا </h3>

              <CancelIcon onClick={handleClose} className={style.cancelIcon} />

            </div>

            <p className={classes.title}>تصویر کالا</p>
            <UploadFile image={(image) => setState({ ...state, image })} />

            <p className={classes.title}>نام کالا</p>
            <BasicTextFields value={(value) => setState({ ...state, name: value })} />

            <p className={classes.title}>موجودی </p>
            <BasicTextFields value={(value) => setState({ ...state, supply: value })} />

            <p className={classes.title}> قیمت</p>
            <BasicTextFields value={(value) => setState({ ...state, price: value })} />
           
            <p className={classes.title}> دسته بندی</p>
            <SimpleSelect value={({ group, groupfa }) => setState({ ...state, group, groupfa })} />

            <p className={classes.title}>گروه کالا</p>
            <BasicTextFields value={(value) => setState({ ...state, subgroup: value })} />

            <p className={classes.title}>  توضیحات </p>
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
      <TextField onChange={handleChange} fullWidth id="outlined-basic" fullWidth variant="outlined" size='small' />

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
  // const [value, setValue] = React.useState('');
  // const [groupfa, setGroupfa] = React.useState('');

  const handleChange = async (event, eventInfo) => {
    // await setValue(event.target.value);
    // await setGroupfa(eventInfo.props.children)

    const group = event.target.value
    const groupfa = eventInfo.props.children

    props.value({ group, groupfa })

  };

  return (
    <div>

      <FormControl size='small' variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={value}
          onChange={handleChange}
        // label="Age"
        >
          {/* <MenuItem value="">
            <em>گروه محصول</em>
          </MenuItem> */}
          <MenuItem value={'groceries'}>کالاهای اساسی و خوار و بار</MenuItem>
          <MenuItem value={'dairies'}>لبنیات</MenuItem>
          <MenuItem value={'proteins'}>محصولات پروتئینی</MenuItem>
          <MenuItem value={'drinks'}>نوشیدنی </MenuItem>
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

