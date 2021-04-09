import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Used react router to create links with the navbar.
class Card extends React.Component {
  render() {

    return <>
            <div className="card" style={{ width: props.width ? props.width: '100%' }} {...props}>
                {props.children}
            </div>
        </>
    }
}


export default Card;
