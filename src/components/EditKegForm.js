import React from 'react';
import ReUsableForm from './ReUsableForm';

function EditKegForm(props) {

    function handleEditKegFormSubmission (event) {
        event.preventDefault();
        props.onEditKegForm({kegName: event.target.kegName.value, kegBrand: event.target.kegBrand.value, kegPrice: event.target.kegPrice.value, kegFlavor: event.target.kegFlavor.value});
    }

    return (
        <React.Fragment>
            <ReUsableForm resuableFormSubmissionHandler ={props.handleEditKegFormSubmission} buttonText = "Edit Keg" />
        </React.Fragment>
    );

    EditKegForm.propTypes = {
        onEditKegForm: propTypes.func
    }
}

export default EditKegForm;
