import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ExitToApp from '@material-ui/icons/ExitToApp';
// core components
import Button from "../CustomButtons/Button.js";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";

import {useSelector} from 'react-redux';
// import {logoutUser} from '../../actions/authActions';

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  
  // const dispatch = useDispatch();
  const {userData} = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);
  const setInitial = (str) => {
    if (str)
      return str.substr(0, 2);
    return str;
  }
  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    // dispatch(logoutUser());
    setOpen(false);
  }

  const handleNo = () => {
    setOpen(false);
  }
  return (
    <div>
      
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          className={classes.buttonLink}
        >
          {setInitial(userData.name)}
        </Button>
      </div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          onClick={() => {handleClickOpen()}}
          className={classes.buttonLink}
        >
          <ExitToApp className={classes.icons} />
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleYes()}} color="primary">
            Yes
          </Button>
          <Button onClick={() => {handleNo()}} color="secondary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
