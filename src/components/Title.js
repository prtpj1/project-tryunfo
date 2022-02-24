import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
