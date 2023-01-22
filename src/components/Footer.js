import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span>2022-2023 WDPR | <Link to='/overons'>Over Ons</Link> | extra footer text</span>
            </div>
        </footer>
    );
}