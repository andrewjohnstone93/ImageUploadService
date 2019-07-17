import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import Router from 'next/router';

export default class Upload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      file: null,
      label: "",
    }
    this.handleLabelChange = this.handleLabelChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }

  onUploadClick = async () => {
    const UPLOAD_END_POINT = 'http://localhost:4000/images/upload'
    const cookies = new Cookies();


    if (this.state.file) {

      const UploadDetails = new FormData()
      UploadDetails.append('file', this.state.file, this.state.file.name)
      UploadDetails.append('label', this.state.label)

      const response = await axios.post(UPLOAD_END_POINT, UploadDetails, { headers: { 'Authorization': 'bearer ' + cookies.get('token') } })

      if (response.data.success) {
        Router.push('/view')
      } else {
        this.setState({ message: response.data.message })
      }
    } else {
      this.setState({ message: 'Invalid Image' })
    }

  }

  handleLabelChange(e) {
    this.setState({ label: e.target.value });
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0],
    })
    console.log(this.state);
  }


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

              <Typography component="h4" variant="h5" style={{ color: "#ff0000" }}>
                {this.state.message}
              </Typography>

              <form noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="loginUsername"
                  label="Image description"
                  name="label"
                  autoComplete="label"
                  onChange={this.handleLabelChange}
                  autoFocus
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="file"
                  label="File"
                  name="file"
                  type="file"
                  autoComplete="label"
                  onChange={this.handleFileChange}
                  autoFocus
                />


                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => this.onUploadClick()}
                >
                  Upload
                  </Button>

              </form>
            </div>
          </Container>
        </Card>
      </div>
    );
  }
}