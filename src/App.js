/* Global imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Root from './containers';

/* Local imports */
import store from './store';

/* Component definition */

const App = props => <Provider store={store}><Root /></Provider>;

/* PropTypes */
App.propTypes = {};
App.defaultProps = {};

/* Local utility functions */

/* Styles */

export default App;
