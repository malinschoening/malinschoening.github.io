import React, {useState, useEffect} from 'react'

const Navigation = () => {
    const [activeID, setActiveID] = useState('about');

    const links = [
        { id: 'about', className: 'about', href: '#about', name: 'About'},
        { id: 'portfolio', className: 'portfolio', href: '#portfolio', name: 'Portfolio'},
        { id: 'contact', className: 'contact', href: '#contact', name: 'Contact'}
    ]

    useEffect(() => {
    console.log(activeID);
    }, [activeID]);
  return (
    <nav id="main-nav">
        <ul>
            {links.map((link) => 
            <li key={link.id} onClick={() => setActiveID(link.id)}>
            <a href={link.href}>{link.name}</a></li>
            )}
        </ul>
        </nav>
  )
}

//import link 
//<Link to

export default Navigation
