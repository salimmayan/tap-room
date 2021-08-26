import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
    return (
        <React.Fragment>
            {props.kegList.map((keg) => {
                return <Keg onKegName={keg.kegName} />
            })}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.object
}

export default KegList;
