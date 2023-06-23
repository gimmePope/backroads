import React from 'react'
import { links, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">

      {
        links.map(link => {
          return (
            <li key={link.id}>
            <a href={link.href} className="footer-link">{link.text}</a>
          </li>
          )
        })
      }
     
    </ul>
    <ul className="footer-icons">
      {
        socialLinks.map(link => {
          return (
            <li key={link.id}>
            <a href={link.href} target={link.target} className="footer-icon" rel='noreferrer'
              ><i className={link.iconText}></i
            ></a>
          </li>
          )
        })
      }
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer