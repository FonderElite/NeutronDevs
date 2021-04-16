import * as React from 'react';
import {
    Link
  } from 'react-router-dom';
interface Props {
    text:string;
    to:string;
}

export const NavLink: React.FC<Props> = ({
    text,
    to,

}) => {
    return (
        <>
            <li id="mobile-nav"><Link to={to}  className="nav-link">{text}</Link></li>
        </>
        );
    }
    export default NavLink;