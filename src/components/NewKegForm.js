import React from 'react';
import ReUsableForm from './ReUsableForm';
import PropTypes from 'prop-types';

function NewKegForm(props) {
    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        console.log("kegName is " + event.target.kegName.value);
        props.onNewKegForm({ kegName: event.target.kegName.value, kegBrand: event.target.kegBrand.value, kegPrice: event.target.kegPrice.value, kegFlavor: event.target.kegFlavor.value });
    }

    return (
        <React.Fragment>
            <ReUsableForm reusableFormSubmissionHandler={handleNewKegFormSubmission} buttonText="Add Keg" />
        </React.Fragment>
    );
}

NewKegForm.propTypes = {
    onNewKegForm: PropTypes.func
}

export default NewKegForm;
