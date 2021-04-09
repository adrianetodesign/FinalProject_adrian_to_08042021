import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Used react router to create links with the navbar.
class Navbar extends React.Component {
  render() {

    return <>
            <div className="navbar">
                <div className="uldiv">
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/passage_articles'>Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to='/writers'>Writers</NavLink>
                        </li>
                        <li>
                        <NavLink to='/New_article'>New Article</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    }
}


export default Navbar;
