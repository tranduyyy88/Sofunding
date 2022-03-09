import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.png";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <>
      <div className="header">
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <div className="main-right">
          <div className="notification">
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M20.9958 17.2606C20.9031 17.149 20.8122 17.0374 20.7229 16.9297C19.4952 15.4448 18.7525 14.5485 18.7525 10.3449C18.7525 8.16853 18.2318 6.38281 17.2056 5.04353C16.4489 4.05413 15.426 3.30357 14.0778 2.74888C14.0605 2.73923 14.045 2.72657 14.0321 2.7115C13.5471 1.08761 12.2201 0 10.7235 0C9.22681 0 7.90036 1.08761 7.41543 2.70982C7.40248 2.72434 7.38721 2.7366 7.37023 2.74609C4.22402 4.04129 2.695 6.52623 2.695 10.3432C2.695 14.5485 1.95337 15.4448 0.724578 16.928C0.635292 17.0357 0.544332 17.1451 0.451698 17.2589C0.212413 17.5475 0.0608062 17.8986 0.0148198 18.2706C-0.0311666 18.6427 0.0303924 19.0201 0.192212 19.3583C0.53652 20.0837 1.27034 20.534 2.10795 20.534H19.3451C20.1788 20.534 20.9076 20.0843 21.253 19.3622C21.4156 19.0239 21.4777 18.6462 21.4321 18.2737C21.3865 17.9012 21.2351 17.5497 20.9958 17.2606ZM10.7235 25C11.5298 24.9993 12.321 24.7805 13.0131 24.3665C13.7051 23.9526 14.2722 23.3591 14.6543 22.649C14.6723 22.615 14.6812 22.5769 14.6801 22.5384C14.679 22.4999 14.668 22.4623 14.6481 22.4294C14.6282 22.3964 14.6001 22.3691 14.5666 22.3502C14.5331 22.3313 14.4952 22.3214 14.4567 22.3214H6.99132C6.95277 22.3213 6.91485 22.3311 6.88124 22.35C6.84763 22.3689 6.81948 22.3961 6.79953 22.4291C6.77959 22.4621 6.76852 22.4997 6.76741 22.5382C6.76631 22.5768 6.7752 22.6149 6.79322 22.649C7.17521 23.3591 7.74224 23.9525 8.43418 24.3664C9.12612 24.7803 9.91718 24.9992 10.7235 25Z"
                fill="#030343"
              />
              <circle cx="17" cy="6" r="3.5" fill="#FF3636" stroke="white" />
            </svg>
          </div>
          <div className="user">
            <img src={User} />
            <h2>User Name</h2>
            <svg
              width="12"
              height="6"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#030343"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button>New Challenge</button>
        </div>
      </div>
    </>
  );
}
export default Header;
