import React from "react";

import Table from "react-bootstrap/Table";

const RepoList = ({ repos }) => (
  <div className="repoListContainer">
      
    <Table striped bordered hover>
    
      <thead>
          <td>Nome</td>
          <td>Stars</td>
          <td>Forks</td>
          <td>Issues</td>
      </thead>
    
      <tbody>
          {repos.map(repo => (
            <tr>  
              <td>{repo.name}</td>
              <td>{repo.stargazers_count}</td>
              <td>{repo.forks}</td>
              <td>{repo.open_issues}</td> 
            </tr>    
          ))}
        
      </tbody> 
    </Table>   
  </div>
);

export default RepoList;
