import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterKegList: []
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
    }


    render() {

        // this is where methods connected to button/element click will go to (inside render() before return)
        let componentToDisplay = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage === true) {
            componentToDisplay = <NewKegForm />
            buttonText = "Go back to Keg List";
        }
        else {
            componentToDisplay = <KegList />
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
