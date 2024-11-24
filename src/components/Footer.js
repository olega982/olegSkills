import React from 'react'
import  '../styles.css'

export default function Footer (){
    const currectYear = new Date().getFullYear()
    return (
        <footer className='footer'>
            <p className='footer-text'>
                {currectYear} All rights reserved!
            </p>
        </footer>
    )
}