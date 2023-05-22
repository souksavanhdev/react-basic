import Button from 'react-bootstrap/Button';

import React from 'react'

export default function ButtonComPonents({ title, background, onClick }) {
    return (
        <div>
            <Button style={{
                background: background ? background : "red",
                width: "100px",
                height: "30px",
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                // flexDirection:'column'


            }} onClick={onClick} >
                <div>{title}</div>
            </Button>
        </div>
    )
}
