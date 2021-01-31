import React, { Component } from "react";
import axios from "axios";

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
      const { data: userinf } = await axios.get(
        `https://api.github.com/users/${user}`
      );

      const { data: starred } = await axios.get(
        `https://api.github.com/users/${user}/starred`
      );
     
      this.setState({ starred, userinf, error: "", loading: false });
      
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        starred: [],
        userinf: [],
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

      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      

      this.setState({ repos, userinf, error: "", loading: false });
        
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        userinf: [],
        loading: false
      });
    }
  };
  
  
  render() {
    const { user, repos, starred, userinf, error, loading } = this.state;

    this.state.starred.sort((a,b) => (a.watchers < b.watchers) ? 1 : -1)

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

      {this.state.starred.length != 0 &&
        <UserInfo userinf={userinf} />
      }
        
      {this.state.starred.length != 0 &&
       <StarredList starred={starred} />
      }

      {this.state.repos.length != 0 &&
        <UserInfo userinf={userinf} />
      }
      
      {this.state.repos.length != 0 &&
        <RepoList repos={repos} />
      }
      
      </div>
    );
  }
}

export default App;
