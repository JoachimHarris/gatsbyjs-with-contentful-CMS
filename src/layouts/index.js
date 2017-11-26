import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';
import '../../node_modules/tachyons-sass/tachyons.scss';
import './customTachyons.scss';

import Navigation from '../partials/Navigation.js';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navigation />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
