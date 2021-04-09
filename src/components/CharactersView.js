import React, { useEffect } from 'react';

//Used react router to create links with the navbar.
class CharactersView extends React.Component {
  render() {

    return <>
        {this.props.characters.map(character => {
            return <>
                <table key={character.name}>
                        <tbody>
                            <tr>
                                <th colSpan="2" className="columnWidth">{character.name}</th>
                                <th colSpan="2" className="columnWidth">Level {character.level}</th>
                                <th rowSpan="5" className="imagePadding">
                                    <img src={require('../../images/' + character.profileImage)} alt={character.name + " profile picture."} className="profileImage"/>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan="4">{character.backstory}</th>
                            </tr>
                            <tr>
                                <th>STR</th>
                                <td>&emsp;{character.str}</td>
                                <th>DEX</th>
                                <td>&emsp;{character.dex}</td>
                            </tr>
                            <tr>
                                <th>CON</th>
                                <td>&emsp;{character.con}</td>
                                <th>INT</th>
                                <td>&emsp;{character.int}</td>
                            </tr>
                            <tr>
                                <th>WIS</th>
                                <td>&emsp;{character.wis}</td>
                                <th>CHA</th>
                                <td>&emsp;{character.cha}</td>
                            </tr>
                        </tbody>
                </table>
                <br />
            </>
            }
        )}
    </>
    }
}

export default CharactersView;