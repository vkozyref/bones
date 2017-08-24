import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../component/Header';

const Template = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
