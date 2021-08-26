import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKegList: [],
            selectedKeg: null,
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
    }

    handleAddingNewKegToList = (newKeg) => {
        const newMasterKegList = this.state.masterKegList.concat(newKeg);
        this.setState({masterKegList: newMasterKegList, formVisibleOnPage: false} )
    }

    handleChangingSelectedKeg = (kegId) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.id === kegId)[0];
        this.setState({selectedKeg: selectedKeg});
    }

    render() {

        // this is where methods connected to button/element click will go to (inside render() before return)
        let componentToDisplay = null;
        let buttonText = null;
        if(this.state.selectedKeg != null){
            componentToDisplay = <KegDetail keg = {this.state.selectedKeg} onHandleDelete = {this.handleDelete} onHandleEdit = {this.handleEdit} />
            buttonText = "Go back to Keg List";
        }
        else if (this.state.formVisibleOnPage === true) {
            componentToDisplay = <NewKegForm onNewKegForm = {this.handleAddingNewKegToList} />
            buttonText = "Go back to Keg List";
        }
        else {
            componentToDisplay = <KegList onKegSelection = {this.handleChangingSelectedKeg} kegList = {this.state.masterKegList} />
            buttonText = "Add New Keg";
        }

        return (
            <React.Fragment>
                <h1>KegControl</h1>
                {componentToDisplay} {/* why does componentToDisplay while it needs curly braces, not need "this." */}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        )
    }
}

export default KegControl;
