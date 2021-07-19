import React, { useEffect } from 'react';
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
import { toast } from 'react-toastify';
import { wordToPersian } from '../../../../../utils/convertNameToPersian';


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
  const [state, setState] = React.useState({ })


  useEffect(async () => {
    await setState({
      image: props.image,
      name: props.name,
      group: props.group,
      groupfa: wordToPersian(props.group),
      subgroup: props.subgroup,
      subgroupfa: wordToPersian(props.subgroup),
      information: props.information,

    })
    // console.log(wordToPersian(props.subgroup))
    // console.log(props)

  }, [])

  const handlePatchData = async () => {
    let data = new FormData()
    data.append('name', state.name)
    data.append('group', state.group)
    data.append('subgroup', state.subgroup)
    data.append('information', state.information)
    data.append('image', state.image)

    // var params = new URLSearchParams();
    // state.name && params.append('name', state.name);
    // state.information && params.append('information', state.information);
    // state.branch && params.append('group', state.branch)


    const group = props.group
    const id = props.id

    try {
      await AXIOS.editProducts(data, group, id)
      handleClose()
      props.isRerender('yes')
      toast.success(<p dir='rtl'> &emsp;<strong> ✔ </strong> &ensp;ویرایش با موفقیت انجام شد    </p>, {
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
      console.log(error.message)
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

      <span onClick={handleOpen} className={classes.button} >
        ویرایش کالا
      </span>
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
              <h3>  ویرایش کالا </h3>

              <CancelIcon onClick={handleClose} className={style.cancelIcon} />

            </div>

            <p>تصویر کالا</p>
            <UploadFile image={(image) => setState({ ...state, image })} defaultValue={props.image} />

            <p>نام کالا</p>
            <BasicTextFields value={(value) => setState({ ...state, name: value })} defaultValue={props.name} />

            <p> دسته بندی</p>
            <SimpleSelect value={(group, groupfa) => setState({ ...state, group, groupfa })} {... props} />

            <p>  توضیحات </p>
            <TextArea defaultValue={props.information} value={(value) => setState({ ...state, information: value })} />

            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Button onClick={handlePatchData} variant="contained" color="primary" style={{ width: '100px', marginTop: '10px' }}>
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
      },
    },
  }));
  const classes = useStyles();
  const handleChange = (event) => {
    props.value(event.target.value)
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">

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

  const handleChange = (event, eventInfo) => {
    const group = event.target.value
    const groupfa = eventInfo.props.children

    props.value({ group, groupfa })



  };

  return (
    <div>

      <FormControl size='small' variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.groupfa}
          onChange={handleChange}
          displayEmpty={true}
          renderValue={()=> props.groupfa}
        >
 
          <MenuItem value={'groceries'}>کالاهای اساسی و خوار و بار</MenuItem>
          <MenuItem value={'dairies'}>لبنیات</MenuItem>
          <MenuItem value={'proteins'}>محصولات پروتئینی</MenuItem>
          <MenuItem value={'drinks'}>نوشیدنی و</MenuItem>
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
    <textarea className={style.textArea} onChange={handleChange}  >
      {props.defaultValue}
    </textarea>
  )
}

