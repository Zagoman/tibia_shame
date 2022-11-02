import React, { useState, useEffect } from "react";

function Character({ character }) {
  const [popUp, setPopUp] = useState("");
  const [popUpData, setPopUpData] = useState([]);
  function onCharacterClick(e) {
    // console.log(e.target.textContent.split(" ").join("%20"));

    setPopUp(e.split(" ").join("%20"));
  }
  useEffect(() => {
    if (popUp) {
      fetch(`https://api.tibiadata.com/v3/character/${popUp}`)
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.characters.deaths ? data.characters.deaths : "no deaths");
          setPopUpData(data.characters.deaths ? data.characters.deaths : "");
        });
    }
  }, [popUp]);
  //   popUpData.forEach((el) => console.log(el.killers));
  const curDeaths = popUpData
    ? popUpData.map((death) => (
        <li key={death.killers[0].time}>
          Killed by {death.killers[0].name} at level {death.level}
        </li>
      ))
    : [<li key="none">No deaths</li>];
  return (
    <li>
      <article>
        <h5>{character.name}</h5>
        <p>{character.rank}</p>
        <button onClick={() => onCharacterClick(character.name)}>See Deaths</button>
        <ul>{curDeaths}</ul>
      </article>
    </li>
  );
}

export default Character;
