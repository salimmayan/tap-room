import React from 'react';

function Header () {
    const headerCSS = {        
        fontSize: '30px',
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        fontSize: 'xxLarge',
        color: 'orange'
      }

    return (
        <React.Fragment>
            <div style={headerCSS}>
            <h1>Tap Room</h1>
            </div>
        </React.Fragment>

    );
}

export default Header;