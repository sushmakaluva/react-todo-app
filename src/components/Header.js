import React from 'react'

function Header() {
    return (
        <header>
            <h1 style={headerStyle}>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    textAlign: "center",
    background: "black",
    padding: "10px",
    color:"white"
}

export default Header;
