import React from 'react';
import Character from "../components/Character"
import "./StarWars.css"

function CharacterList(props){
    return(
        <div >
            {props.char.map(character => {
                return (
                    <Character char ={character}/>
                )
            })}
        </div>
    )
}




export default CharacterList;