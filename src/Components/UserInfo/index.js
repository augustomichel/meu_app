import React from "react";

import Table from "react-bootstrap/Table";

const UserInfo = ({ userinf }) => (
  <div className="UserInfoContainer">           
    <a
      href={userinf.html_url}
      key={userinf.id}
      className="repoItemContainer"
      target="_blank"
    >
      {userinf.name}  
    </a>
  </div>
);

export default UserInfo;
