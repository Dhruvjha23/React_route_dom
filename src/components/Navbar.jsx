import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#333', color: '#fff' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </nav>
    );
};

export default Navbar;
