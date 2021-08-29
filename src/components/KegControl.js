import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKegList: [],
            selectedKeg: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
          this.setState({
            formVisibleOnPage: false,
            selectedKeg: null,
            editing: false // new code
          });
        } else {
          this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
          }));
        }
      }

    handleAddingNewKegToList = (newKeg) => {
        const newMasterKegList = this.state.masterKegList.concat(newKeg);
        this.setState({ masterKegList: newMasterKegList, formVisibleOnPage: false })
    }

    handleChangingSelectedKeg = (kegId) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.kegId === kegId)[0];
        this.setState({ selectedKeg: selectedKeg, formVisibleOnPage: false });
    }

    handleDelete = (kegId) => {
        const newMasterKegList = this.state.masterKegList.filter((keg) => keg.kegId !== kegId);
        this.setState({ masterKegList: newMasterKegList, selectedKeg: null, formVisibleOnPage: false });
    }

    handleEdit = (kegId) => {
        // const newMasterKegList = this.state.masterKegList.filter((keg) => keg.kegId !== kegId).concat(keg);
        // const selectedKeg = this.state.masterKegList.filter(keg => keg.kegId === kegId)[0];
        this.setState({ editing: true, formVisibleOnPage: false });
    }

    handleEditKegForm = (keg) => {
        // console.log("keg in handleEditKegForm is ");
        // console.log(keg);
        const kegIdSortOrder  = this.state.masterKegList.map(function(keg) {
            return keg.kegId;
        });
        const illSortedMasterKegList = this.state.masterKegList.filter((tempKeg) => tempKeg.kegId !== keg.kegId).concat(keg);
        const newSortedMasterKegList = kegIdSortOrder.map((element) => illSortedMasterKegList.find((keg) => keg.kegId === element));
        this.setState({ masterKegList: newSortedMasterKegList, editing: false, formVisibleOnPage: false, selectedKeg: null });
    }

    handleSellPint = (kegId) => {
        // console.log("in handleSellPint method");
        const kegIdSortOrder  = this.state.masterKegList.map(function(keg) {
            return keg.kegId;
        });

        const tempDisableButton = "disabled";
        const tempSelectedKeg = this.state.masterKegList.filter((keg) => keg.kegId === kegId)[0];
        if (tempSelectedKeg.kegQty !== 0) {
            tempSelectedKeg.kegQty = tempSelectedKeg.kegQty - 1;
        }
        if (tempSelectedKeg.kegQty === 0) {
            tempSelectedKeg.kegAlertMessage = "Out Of Stock !!!";
            tempSelectedKeg.kegDisableButton = tempDisableButton;
        }
        else if (tempSelectedKeg.kegQty > 0) {
            if (tempSelectedKeg.kegQty >= 1 && tempSelectedKeg.kegQty <= 9) {
                tempSelectedKeg.kegAlertMessage = "Almost Empty !";
            }
        }

        const illSortedMasterKegList = this.state.masterKegList.filter((tempKeg) => tempKeg.kegId !== tempSelectedKeg.kegId).concat(tempSelectedKeg);
        const newSortedMasterKegList = kegIdSortOrder.map((element) => illSortedMasterKegList.find((keg) => keg.kegId === element));
        this.setState({ masterKegList: newSortedMasterKegList, editing: false, formVisibleOnPage: false, selectedKeg: null });
    }

    render() {
        // this is where methods connected to button/element click will go to (inside render() before return)
        let componentToDisplay = null;
        let buttonText = null;
        if (this.state.editing === true) {
            // console.log("Inside editing is true");
            componentToDisplay = <EditKegForm keg={this.state.selectedKeg} onEditKegForm={this.handleEditKegForm} />
            buttonText = "Go back to Keg List";
        }
        else if (this.state.selectedKeg != null) {
            // console.log("Inside selectedKeg not null");
            componentToDisplay = <KegDetail keg={this.state.selectedKeg} onHandleDelete={this.handleDelete} onHandleEdit={this.handleEdit} />
            buttonText = "Go back to Keg List";
        }
        else if (this.state.formVisibleOnPage === true) {
            // console.log("Inside formVisibleOnPage true");
            componentToDisplay = <NewKegForm onNewKegForm={this.handleAddingNewKegToList} />
            buttonText = "Go back to Keg List";
        }
        else {
            // console.log("Inside formVisibleOnPage false");
            componentToDisplay = <KegList onKegSelection={this.handleChangingSelectedKeg} kegList={this.state.masterKegList} onSellPint={this.handleSellPint} />
            buttonText = "Add New Keg";
        }

        const buttonCSS = {
            // fontSize: '30px',
            textAlign: 'center',
            padding: '5px',
            margin: '5px',
            fontSize: 'xxLarge',
            color: 'orange'
        }

        return (
            <React.Fragment>
                {/* <h1>KegControl</h1> */}
                {componentToDisplay} {/* why does componentToDisplay while it needs curly braces, not need "this." */}
                <div style={buttonCSS}>
                    <br></br>
                    <button onClick={this.handleClick}>{buttonText}</button></div>
            </React.Fragment>
        )
    }
}

export default KegControl;
