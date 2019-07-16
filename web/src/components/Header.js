import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Cookies } from 'react-cookie';
import Router from 'next/router';

const Header = () => {
  const cookies = new Cookies();

  function onClickUpload() {
    Router.push("/upload"); 
  }

  function onClickView() {
    Router.push("/view"); 
  }

  function onClickLogout() {
    cookies.remove("token")
    Router.push("/"); 
  }

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
            Secure Image Upload
          </Typography>
          
          {cookies.get("token") ? (<div>
          <Button color="inherit" onClick={onClickView}>
              View Images
          </Button>
          <Button color="inherit" onClick={onClickUpload}>
              Upload
          </Button>
          <Button color="inherit" onClick={onClickLogout}>
              Logout
          </Button>
          </div>) : ''}
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header;
