import React from 'react';

function Header() {
    const headerCSS = {
        // fontSize: '30px',
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        fontSize: 'xxLarge',
        color: 'red'
    }

    return (
        <React.Fragment>
            <div style={headerCSS}>
                <h1>Soda Fountain Tap Room</h1>
                <br></br>
                <br></br>
            </div>
        </React.Fragment>

    );
}

export default Header;