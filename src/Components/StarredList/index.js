import React from "react";

import Table from "react-bootstrap/Table";


const StarredList = ({ starred  }) => (
  <div>
    <Table striped bordered hover>    
                       
      <tbody>       
          {starred.map(starredItem => (
            <tr>  
              <td>{starredItem.name}</td>
              <td>{starredItem.stargazers_count}</td>
              <td>{starredItem.watchers}</td> 
            </tr>    
          ))}
        
      </tbody> 
    </Table>   
  </div>
);

export default StarredList;
