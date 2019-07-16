import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import axios from 'axios';
import { Cookies } from 'react-cookie';
import Router from 'next/router';

const LOGIN_END_POINT = 'http://localhost:4000/users/authenticate'
const cookies = new Cookies();

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: cookies.get('token') || null,
      username: "",
      password: "",
    }
  }

  getInitialState = function () {
    return { username: '', password: '' };
  }

  handleChange = function (event) {
    this.setState({ username: event.target.value, password: event.target.value });
  }

  onLoginClick = async () => {
    console.log("Login called");
    const response = await axios.post(LOGIN_END_POINT, { username: "andrew", password: "andrew" })
    console.log(response);
    const token = response.data.data.token;
    cookies.set('token', token);
    this.setState({
      token: token
    })

    if (token) {
      Router.push('/internal')
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Typography component="h1" variant="h5">
              Sign in
                </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container cols={1}>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.onLoginClick()}
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}