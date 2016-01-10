import React, { Component, PropTypes} from 'react';
import md5 from 'md5';
import querystring from 'querystring';

class Gravatar extends Component {

  render() {
    let  base = "http://www.gravatar.com/avatar/";
    if (this.props.secure)  
      base = "https://secure.gravatar.com/avatar/";

    const hash = md5(this.props.email);

    const query = querystring.stringify({
      r: this.props.rating,
      s: this.props.size
    });

    const src = base + hash + "?" + query;

    return(
      <img
      src={src}
      className = {this.props.className}
      alt = {this.props.alt}
      style = {this.props.style}
      />
    );
  }
}

Gravatar.displayName = "Gravatar";

Gravatar.defaultProps = {
  size: 50,
  secure: false,
  rating: 'G',
  https: false
};

Gravatar.PropTypes = {
  alt: PropTypes.string,
  email: PropTypes.string.isRequired,
  size: PropTypes.number,
  secure: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Gravatar;