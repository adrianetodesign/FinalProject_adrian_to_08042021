import React, { useEffect } from 'react';

//Used react router to create links with the navbar.
class Header extends React.Component {
  render() {

    return <>
            <div className="headbox">
                    <span className="warcount"> 618 DAYS </span>
                    <br />
                    Since the end of the Last War
            </div>
            <header>Passage Chronicle</header>
            <div className="subhead">Passage, AD - The #1 Source for News in Aundair</div>
        </>
    }
}


export default Header;