import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { connect } from 'react-redux';
import {AiFillDashboard} from 'react-icons/ai';
// import {logoutUser} from '../../actions/authActions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "../CustomButtons/Button.js";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class HeaderBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  handleClickOpen() {

    this.setState({open:true});
  };

  handleClose(){
    this.setState({open:false});
  };

  handleYes(){
    this.props.logoutUser();
    this.setState({open:false});
  }

  handleNo(){
    this.setState({open:false});
  }
  triggerMobileMenu(){
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  }
  render() {
    return (
      <div className="header-btn-wrapper">
        {this.props.authenticated === false ? (
          <>
            <ul className="accounts d-none d-lg-flex">
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}><FaKey /> &nbsp; Log in</Link>
              </li>
              <li className="active">
                <Link to={process.env.PUBLIC_URL + "/login-register"}><FaWallet /> &nbsp;Register</Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="accounts d-none d-lg-flex">
              <li>
                {this.props.userData.role === 'developer' ? (
                  <Link to={process.env.PUBLIC_URL + "/dashboard/dashboard"}><AiFillDashboard /> &nbsp; Dashboard</Link>
                ):(
                  <Link to={process.env.PUBLIC_URL + "/admin"}><AiFillDashboard /> &nbsp; Dashboard</Link>
                )}
              </li>
              <li>
                <button className='logout_btn' onClick={() => {this.handleClickOpen()}}><ExitToAppIcon /> &nbsp; LOGOUT</button>
              </li>
            </ul>
          </>
        )} 
        <div className="mobile-button-wrapper d-block d-lg-none text-right">
          <button
            className="mobile-aside-button"
            onClick={() => {this.triggerMobileMenu();}}
          >
            <IoIosMenu />
          </button>
        </div>
        <Dialog
        open={this.state.open}
        onClose={() => {this.handleClose()}}
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
          <Button onClick={() => {this.handleYes()}} color="primary">
            Yes
          </Button>
          <Button onClick={() => {this.handleNo()}} color="warning" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
};
const mapStateToProps = (store) => {
  const {authenticated, userData} = store.auth;
  return {authenticated, userData};
}
export default connect(mapStateToProps)(HeaderBtn);
