import Form from "./Form";

function Header(props) {
  // const payload = {
  //     worlds: worlds,
  //     characters: characters,
  //     getCharsFromGuild(e) {
  //       setCharacters(e)
  //     },
  //   };
  return (
    <header>
      {/* <nav className="ul">
        <li>
          <a href="#">guild</a>
        </li>
        <li>
          <a href="#">guild</a>
        </li>
      </nav> */}
      <section className="container">
        <h1>International Tibia's Hall of Shame</h1>
        <p>You do not want to be here, but if you are, make sure it is for a honorable cause</p>
        <Form worlds={props.worlds} characters={props.characters} getCharsFromGuild={props.getCharsFromGuild} />
      </section>
    </header>
  );
}

export default Header;
