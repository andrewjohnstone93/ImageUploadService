import React from 'react';
import Grid from '@material-ui/core/Grid';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default class extends React.Component {
    
  getInitialProps = async (ctx) => {
    await handleAuth(ctx);
  
    return {}
  }

    render() {
        return (
            <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid xs={6} key="Login" item>
                            <LoginForm></LoginForm>
                        </Grid>
                        <Grid xs={6} key="Register" item>
                            <RegisterForm></RegisterForm>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>)
    }
  }

  
 
