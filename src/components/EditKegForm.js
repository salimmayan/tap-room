import React from 'react';
import ReUsableForm from './ReUsableForm';
import PropTypes from 'prop-types';

function EditKegForm(props) {
    function handleEditKegFormSubmission(event) {
        event.preventDefault();
        const kegId = props.keg.kegId;
        props.onEditKegForm({ kegName: event.target.kegName.value, kegBrand: event.target.kegBrand.value, kegPrice: event.target.kegPrice.value, kegFlavor: event.target.kegFlavor.value, kegQty: props.keg.kegQty, kegId: kegId });
    }

    return (
        <React.Fragment>
            {/* <h5 className="coralColor">Edit Keg</h5> */}
            <ReUsableForm reusableFormSubmissionHandler={handleEditKegFormSubmission} buttonText="Edit Keg" title="Edit Keg Page" />
        </React.Fragment>
    );
}

EditKegForm.propTypes = {
    onEditKegForm: PropTypes.func,
    keg: PropTypes.object
}

export default EditKegForm;
