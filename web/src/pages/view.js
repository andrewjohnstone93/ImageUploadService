
import React from 'react';
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';

import { Cookies } from 'react-cookie';
import Router from 'next/router';
import axios from 'axios';
import handleAuth from '../util/handleAuth'

const cookies = new Cookies();

class Internal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  async componentDidMount() {
    axios.get("http://localhost:4000/images/getAll", { headers: { 'Authorization': 'bearer ' + cookies.get('token') } })
      .then(res => {
        const images = res.data.images;
        this.setState({ images });
      })
  }

  render() {
    if (this.state.images.length > 0) {
      console.log(this.state.images)
      return (
        <React.Fragment>
          <div>
            {this.state.images == [] ? (<h1>No images uploaded yet.</h1>) : ('')}
            <GridList cellHeight={300} cols={6}>
              {this.state.images.map(image => (
                <GridListTile key={image.id}>
                  <img src="http://placekitten.com/300/300" />
                  <GridListTileBar
                    title={image.label}
                    subtitle={<span>Uploaded: {image.date}</span>}
                    actionIcon={
                      <div>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton>
                          <ShareIcon />
                        </IconButton>
                      </div>} />
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