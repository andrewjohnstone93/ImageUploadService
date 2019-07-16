import axios from 'axios';
import { Cookies } from 'react-cookie';
import Router from 'next/router';

const VERIFY_TOKEN_API = 'http://localhost:4000/users/verify';

export default async function handleAuth(ctx) {
  var token;

  const cookies = new Cookies();

  if (ctx.req) {
    // Server Side
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  } else {
    // Client Side
    token = cookies.get('token')
  }

  try {
    const response = await axios.post(VERIFY_TOKEN_API, { token: token });
  } catch (err) {
    // in case of error
    //redirect to login
    console.log(err);
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/'
      })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
}


