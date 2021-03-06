
import React from 'react';
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Cookies } from 'react-cookie';
import axios from 'axios';
import handleAuth from '../util/handleAuth'
import io from 'socket.io-client';

const cookies = new Cookies();

class Internal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  async componentDidMount() {
      this.getImages();

      const socket = io('http://localhost:4000');

      socket.on('fileUploaded', data => {
        console.log("Image recevied");
        this.getImages();
      });
  }

  getImages() {
    axios.get("http://localhost:4000/images/getAll", { headers: { 'Authorization': 'bearer ' + cookies.get('token') } })
      .then(res => {
        const images = res.data.images;
        this.setState({ images });
      })
  }

  render() {
    if (this.state.images.length > 0) {
      return (
        <React.Fragment>
          <div>
            {this.state.images == [] ? (<h1>No images uploaded yet.</h1>) : ('')}
            <GridList cellHeight={400} cols={3}>
              {this.state.images.map(image => (
                <GridListTile key={image.id}>
                  <img style={{maxWidth:"100%"}} src={image.image} />
                  <GridListTileBar
                    title={image.label}
                    subtitle={<span>Uploaded: {image.date}</span>} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </React.Fragment>
            
      );
    } else {
      return (
        <React.Fragment>
          <div>
            <h3>No images uploaded yet.</h3>
          </div>
        </React.Fragment>
      );
    }

  }
}

Internal.getInitialProps = async (ctx) => {
  await handleAuth(ctx);

  return {}
}

export default Internal;