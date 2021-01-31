import React from "react";
import Image from 'react-bootstrap/Image'


const UserInfo = ({ userinf }) => (
  <div >
    <h3>Dados do Usuário</h3>   
    <div class="minha-div">
      <Image style={{ width: 50 }} src={userinf.avatar_url} />        
    </div>
    <a
      href={userinf.html_url}
      key={userinf.id}
      target="_blank"
    >
      {userinf.name}  
    </a>
    
  </div>
  
);

export default UserInfo;
