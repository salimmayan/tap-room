import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
    return (
        <React.Fragment>
            {props.kegList.map((currentKeg) => {
                return <Keg whenKegClicked ={props.onKegSelection} onIndividualKeg={currentKeg} />
            })}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.object,
    onKegSelection: PropTypes.func
}

export default KegList;
