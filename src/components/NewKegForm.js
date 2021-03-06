import React from 'react';
import ReUsableForm from './ReUsableForm';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewKegForm(props) {
    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        // console.log("kegName is " + event.target.kegName.value);
        // const kegId = {};
        // ticket.id = v4()
        props.onNewKegForm({ kegName: event.target.kegName.value, kegBrand: event.target.kegBrand.value, kegPrice: event.target.kegPrice.value, kegFlavor: event.target.kegFlavor.value, kegQty: 24, kegDisableButton: "", kegAlertMessage: "", kegId: v4() });
    }

    return (
        <React.Fragment>
            {/* <h5 className="coralColor">Add New Keg</h5> */}
            <ReUsableForm reusableFormSubmissionHandler={handleNewKegFormSubmission} buttonText="Add Keg" title="Add New Keg"  />
        </React.Fragment>
    );
}

NewKegForm.propTypes = {
    onNewKegForm: PropTypes.func
}

export default NewKegForm;
