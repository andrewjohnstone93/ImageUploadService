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

const LOGIN_END_POINT = 'http://localhost:4000/users/authenticate'
const cookies = new Cookies();

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: cookies.get('token') || null,
      username: "",
      password: "",
      message: "",
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onLoginClick = this.onLoginClick.bind(this)
  }

  onLoginClick = async () => {
    event.preventDefault();
    var loginDetails = {
      username: this.state.username,
      password: this.state.password,
    }

    const response = await axios.post(LOGIN_END_POINT, loginDetails)

    if (response.data.success) {
      const token = response.data.data.token;

      cookies.set('token', token);
      this.setState({
        token: token
      })

      if (token) {
        Router.push('/view')
      }
    } else {
      this.setState({ message: response.data.message })
    }
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <Card style={{ padding: '10px' }}>
          <Container component="main" maxWidth="xs" style={{ textAlign: 'center' }}>
            <CssBaseline />
            <div>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Typography component="h4" variant="h5" style={{color:"#ff0000"}}>
                {this.state.message}
              </Typography>

              <form noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="loginUsername"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={this.handleUsernameChange}
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
                  id="loginPassword"
                  onChange={this.handlePasswordChange}
                  autoComplete="current-password"
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => this.onLoginClick()}
                >
                  Sign In
                  </Button>
              </form>
            </div>
          </Container>
        </Card>
      </div>
    );
  }
}