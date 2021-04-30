import React from "react";
import NewKegForm from "./NewKegForm";
import KegDetails from "./KegDetails";
import KegList from "./KegList";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedKeg: null
      };
  };

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      }
    }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleServingPint = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg) {
      const newQuantity = (parseInt(selectedKeg.quantity) - 1)
      selectedKeg.quantity = newQuantity
      this.setState({selectedKeg: selectedKeg})
    }
  }
  
  handleSwappingKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg) {
      selectedKeg.quantity = '124'
      this.setState({selectedKeg: selectedKeg})
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} 
                                          onServingPint = {this.handleServingPint}
                                          onSwappingKeg = {this.handleSwappingKeg}/>
      buttonText = "Return to Keg List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";

    } else {
      currentlyVisibleState =  <KegList kegList = {this.state.masterKegList} 
                                        onKegSelection = {this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg"
    }
    return(
      <>
        <button className='button' onClick = {this.handleClick}>{buttonText}</button><br></br>
        {currentlyVisibleState}
      </>
    );
  }

}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);;

export default KegControl;