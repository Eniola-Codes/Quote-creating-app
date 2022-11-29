import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';


const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>QuoteR</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={classes.active}>Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/newquote' activeClassName={classes.active}>Add quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation