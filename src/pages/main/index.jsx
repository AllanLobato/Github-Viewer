import React, { useState, useEffect } from "react";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Pagination from "../pagination";

import api from "../../services/api";

import { Container, Header, User, UserInfo, Repositories } from "./styles";

const Main = (props) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [reposData, setReposData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);
  const [newProps, setNewProps] = [];

  console.log(props);

  useEffect(() => {
    const { match } = props;
    const componentDidMount = async () => {
      const [user, repositories] = await Promise.all([
        api.get(`users/${match.params.username}`),
        api.get(`users/${match.params.username}/repos`),
      ]);
      setUserData(user.data);
      setReposData(repositories.data);
      setUsername(match.params.username);
    };

    componentDidMount();
  }, [newProps]);

  const indexOfLastRepos = currentPage * reposPerPage;
  const indexOfFirstPost = indexOfLastRepos - reposPerPage;
  const currentRepos = reposData.slice(indexOfFirstPost, indexOfLastRepos);

  const paginate = (number) => setCurrentPage(number);

  return (
    <Container>
      <Header>
        <FaGithub color="#000" size={30} />
        <h1>GitHub Viewer</h1>
      </Header>

      <User>
        <div>
          <Link to="/">
            <FaArrowLeft color="#121212" size={20} />
          </Link>
        </div>

        <UserInfo>
          <img src={userData.avatar_url} alt="Perfil" />
          <span> {userData.login} </span>
        </UserInfo>

        <Repositories>
          <div>
            <Pagination
              reposPerPage={reposPerPage}
              totalRepos={reposData.length}
              paginate={paginate}
              username={username}
            />
          </div>
          {currentRepos.map((repository) => (
            <a href={repository.html_url}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
        </Repositories>
      </User>
    </Container>
  );
};

export default Main;
