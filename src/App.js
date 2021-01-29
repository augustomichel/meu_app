import React, { Component } from "react";
import axios from "axios";

import logo from './logo.svg';
import './App.css';

import Header from "./Components/Header";
import Pesquisa from "./Components/Form";
import RepoList from "./Components/RepoList";
import UserInfo from "./Components/UserInfo";
import StarredList from "./Components/StarredList";

class App extends Component {
  state = {
    user: "",
    repos: [],
    userinf: [],
    starred: [],
    error: "",
    flag: false,
    loading: false
  };

  changeUser = user => {
    this.setState({ user });
  };


  starredUser = async () => {
    const { user } = this.state;


    this.setState({ loading: true });

    try {
      const { data: starred } = await axios.get(
        `https://api.github.com/users/${user}/starred`
      );

      console.log(starred);

      this.setState({ starred, error: "", loading: false, flag: true });
      
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        starred: [],
        loading: false
      });
    }
  };

  repoUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {

      const { data: userinf } = await axios.get(
        `https://api.github.com/users/${user}`
      );

      console.log(userinf);

      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      this.setState({ repos, userinf, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        loading: false
      });
    }
  };
  
  render() {
    const { user, repos, starred, userinf, error, loading } = this.state;

    return (
      <div className="App">
        <Header />
        <Pesquisa
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonRepoAction={this.repoUser}
          buttonStarredAction={this.starredUser}
        />

        <UserInfo userinf={userinf} />
        
        <StarredList starred={starred} />
        
        <RepoList repos={repos} />
        
      </div>
    );
  }
}

export default App;
