import React, { useState } from "react";
import { FaGithub, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, Header, Form, User } from "./styles";

const Home = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUsername(username);

    const response = await api.get(`users/${username}`);

    const data = response.data;

    setUser(data);

    setUsername("");
  };

  const photo =
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

  return (
    <Container>
      <Header>
        <FaGithub color="#000" size={30} />
        <h1>GitHub Viewer</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Insira um usuário do github..."
          onChange={handleInput}
        />
        <button type="submit">
          <FaSearch color="#000" size={22} />
        </button>
      </Form>

      <User>
        <Link to={`/main/${user.login}`}>
          <div>
            <img src={user.avatar_url ? user.avatar_url : photo} alt="Perfil" />
          </div>
          <span>{user.login}</span>
        </Link>
        <p>{user.bio}</p>
      </User>
    </Container>
  );
};

export default Home;
