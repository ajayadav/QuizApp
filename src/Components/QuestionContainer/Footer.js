import React from 'react';

const Footer = (props) => {
    return (
        <div className='qz-footer'>
            <button onClick = {(e) => props.skipQuestion()} className='btn btn-primary'>Skip</button>
            <button onClick = {(e) => props.submitQuestion()} className='btn btn-default'>Submit</button>
        </div>
    )
}

export default Footer;