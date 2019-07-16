import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Router from 'next/router';
import Card from '@material-ui/core/Card';
import Dropzone from 'react-dropzone-uploader'

const LOGIN_END_POINT = 'http://localhost:4000/users/authenticate'
const cookies = new Cookies();

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "",
            files: [],
        }
    }
     handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

     handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
    
  render() {
      console.log(this.state)
    return (
      <div>
        <Card style={{ padding: '10px' }}>
          <Container component="main" maxWidth="xs" style={{ textAlign: 'center' }}>
            <CssBaseline />
            <div>
              <Typography component="h1" variant="h5">
                Upload
              </Typography>

              <Dropzone
                  onChangeStatus={this.handleChangeStatus}
                  onSubmit={this.handleSubmit}
                  accept="image/*"
                />
            </div>
          </Container>
        </Card>
      </div>
    );
  }
}