import CharacterList from "./CharacterList";

function Main(props) {
  return (
    <main className="container">
      <div>
        <h2>Hall of Shame of {props.guild}</h2>
        <CharacterList characters={props.characters} />
      </div>
    </main>
  );
}

export default Main;
