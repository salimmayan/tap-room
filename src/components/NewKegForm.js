import React from 'react';
import ReUsableForm from './ReUsableForm';

function NewKegForm(props) {

    function handleNewKegFormSubmission (event) {
        event.preventDefault();
        props.onNewKegForm({kegName: event.target.kegName.value, kegBrand: event.target.kegBrand.value, kegPrice: event.target.kegPrice.value, kegFlavor: event.target.kegFlavor.value});
    }

    return (
        <React.Fragment>
           <ReUsableForm resuableFormSubmissionHandler ={props.handleNewKegFormSubmission} buttonText = "Add Keg" />
        </React.Fragment>
    );

    NewKegForm.propTypes = {
        onNewKegForm: propTypes.func
    }
}

export default EditNewKegFormKegForm;
