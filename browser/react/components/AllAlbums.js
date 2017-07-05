import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllAlbums extends Component {

  constructor() {
    super();
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }

  render () {

    const selectAlbum = this.props.selectAlbum;
    const albums = this.state.albums;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
            {/*}  <Link to={`/albums/${album.id}`}</Link>*/}
              <a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </a>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
