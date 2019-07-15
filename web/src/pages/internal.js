
import React from 'react';
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';


const posts = [
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },         {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },         {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },         {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },         {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },
      {
        title: 'Featured post',
        date: 'Nov 12',
      },
      {
        title: 'Post title',
        date: 'Nov 11',
      },   
];
  
export default class extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <GridList cellHeight={300} cols={6}>
                        {posts.map(tile => (
                            <GridListTile key={tile.img}>
                                <img src="http://placekitten.com/300/300"/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>Uploaded: {tile.date}</span>}
                                actionIcon={
                                <div>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton>
                                        <ShareIcon />
                                    </IconButton>
                                </div>}/>
                              </GridListTile>
                          ))}
                      </GridList>
                </div>
            </React.Fragment>
          );
        }        
    }