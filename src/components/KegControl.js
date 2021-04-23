import React from "react";
import NewKegForm from "./NewKegForm";
import KegDetails from "./KegDetails";
import KegList from "./KegList";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        formVisibleOnPage: false,
        masterKegList: [],
        selectedKeg: null
      };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(product => product.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList(newKeg) {
    const newMasterKegList = this.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                    formVisibleOnPage: false})
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg}/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} 
                                      onKegSelection = {this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg"
    }
    return(
      <>
      {currentlyVisibleState}
      <button onCLick = {this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;