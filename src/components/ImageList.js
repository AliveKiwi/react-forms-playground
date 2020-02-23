import React from 'react';

class ImageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map(({ description, id, urls }) => {
          return <img key={id} alt={description} src={urls.small} />;
        })}
      </div>
    );
  }
}
export default ImageList;
