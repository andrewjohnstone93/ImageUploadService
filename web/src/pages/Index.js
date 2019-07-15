import Router from 'next/router'
import React from 'react'

export default class extends React.Component {

    static async getInitialProps (context) {
        const isUserLoggedIn = false;
    
        if (!isUserLoggedIn) {
            if (context && context.req) {
                console.log('server side')
                context.res.writeHead(302, {Location: `/login`})
                context.res.end()
            } else {
                console.log('client side')
                Router.push(`/login`)
            }
        }
        
        return { isUserLoggedIn }
      }

      render() {
          return (<div></div>)
      }
    }

  
