import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

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
    borderRadius: 5,
    border: 'none',
    outline: 'none'

  },
  modalTitle:{
    marginBottom:35
  },
  button: {
    height: 55
  },
  buttonContainer:{
    display:'flex',
    justifyContent:'space-evenly'
  },
  confirmButton:{
    width:70,
    height:30,
    borderRadius:4,
    backgroundColor:'rgb(250, 250, 250)',
    '&:hover':{
      backgroundColor:'#eee',
      cursor: 'pointer',
      transition: '.3s'
    }

  },
  yesButton:{
    border:'1.4px solid rgb(0, 175, 0)',
  },
  noButton:{
    border:'1.4px solid red',
  }

}));

export default function ConfrimModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    handleClose()
    props.onClick(e.target.value)
    // console.log(e.target.value)
  }



  return (
    <div>

      <Button variant='contained' color="secondary" onClick={handleOpen} className={classes.button}>
        افزودن به سبد خرید
      </Button>
      <Modal
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
            <h4 id="transition-modal-title" className={classes.modalTitle}>  آیا مایلید این محصول به لیست خرید اضافه شود ؟</h4>


            {/* <p id="transition-modal-description"> </p> */}
            <section className={classes.buttonContainer} > 
              <button className={`${classes.confirmButton} ${classes.yesButton}`} variant='outlined' onClick={onClick} value={true} > بله </button>
              <button className={`${classes.confirmButton} ${classes.noButton}`} variant='outlined' onClick={onClick} value={false}> خیر </button>
            </section>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
