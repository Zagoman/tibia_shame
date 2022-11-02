import { useState, useEffect } from "react";

function Form(props) {
  // const payload = {
  //     worlds: worlds,
  //     characters: characters,
  //     getCharsFromGuild(e) {
  //       setCharacters(e)
  //     },
  //   };
  const [world, setWorld] = useState("Adra");
  const [guild, setGuild] = useState("");
  const [guilds, setGuilds] = useState([]);
  //   console.log(props.worlds[0].name);

  function onSubmit(e) {
    e.preventDefault();
  }
  function onWorldChange(e) {
    setWorld(e.target.value);
  }
  function onGuildChange(e) {
    setGuild(e.target.value);
  }
  useEffect(() => {
    if (world) {
      fetch(`https://api.tibiadata.com/v3/guilds/${world}`)
        .then((res) => res.json())
        .then((data) => {
          setGuilds(data.guilds.active);
        });
    }
  }, [world]);
  useEffect(() => {
    if (guild) {
      fetch(`https://api.tibiadata.com/v3/guild/${guild}`)
        .then((res) => res.json())
        .then((data) => {
          props.getCharsFromGuild(data.guilds.guild.members);
        });
    }
  }, [guild]);
  const worldOptions = props.worlds.map((item) => <option key={item.name}>{item.name}</option>);
  const guildOptions = guilds.map((item) => <option key={item.name}>{item.name}</option>);

  return (
    <form action="#" onSubmit={onSubmit}>
      <label htmlFor="world">World</label>
      <select onChange={onWorldChange} name="world" id="world">
        <option value=""></option>

        {worldOptions}
      </select>
      <label htmlFor="guild">Guild</label>
      <select onChange={onGuildChange} name="guild" id="guild">
        <option value=""></option>
        {guildOptions}
      </select>
    </form>
  );
}

export default Form;
