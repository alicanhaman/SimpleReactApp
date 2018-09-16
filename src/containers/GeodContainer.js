import {
    activateGeod,
    closeGeod,
  } from '../actions/action';

import { connect } from 'react-redux';

import GeodComponent from '../components/GeodComponent'

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
  });
  
  const mapDispatchToProps = {
    activateGeod,
    closeGeod,
  };
  
  const GeodContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GeodComponent);
  
  export default GeodContainer;