import Character from "./Character";

function CharacterList(props) {
  const newList = props.characters.map((char) => <Character key={char.name} character={char} />);
  return <ul>{newList}</ul>;
}

export default CharacterList;
