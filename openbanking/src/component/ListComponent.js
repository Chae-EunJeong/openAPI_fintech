import React, { useState } from "react";
import ListItem from "./ListItem";

const ListComponent = () => {
    const [array, setarray] = useState([
      { name: "alice", age: "20", height: "170" },
      { name: "bob", age: "23", height: "172" },
      { name: "clara", age: "25", height: "175" },
    ]);
    return (
        <div>
            {array.map((user, index) => {
                return <ListItem user={user} key={index}></ListItem>;
            })}
        </div>
    ) ;
  };

export default ListComponent;