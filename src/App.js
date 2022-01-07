import { useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyFunction></MyFunction>
    </div>
  );
}

function MyFunction() {
  const [username, setusername] = useState("");
  //const [password, setpassword] = useState("");
  const [list, setList] = useState([]);

  const takeusername = (e) => {
    setusername(e.target.value);
  };

  /* const takepassword = (e) => {
    setpassword(e.target.value);
  };*/

  const addUser = async () => {
    const url = "http://localhost:4000/user";
    const data = {
      username: username,
    };
    await axios.post(url, data);

    const newList = [data, ...list];
    setList = newList;
    setusername("");
  };

  const getUser = async () => {
    const url = `http://localhost:4000/user-add`;
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="My Chat App "
          value={username}
          onChange={takeusername}
          //onChange={takepassword}
        />
      </div>
      <div>
        <input type="text" placeholder="Let's chat here" />
      </div>
      <div>
        <input type="button" value="Send " onClick={addUser} />
        <input type="button" value="Click " onClick={getUser} />
      </div>
      <div>
        <input type="text" placeholder="Hi" />
      </div>
      <div>
        <input type="text" placeholder="Hello" />
      </div>
      <div>
        <input type="text" placeholder="Whatsapp" />
      </div>
      <div>
        <input type="text" placeholder="All good" />
      </div>
      <div>
        <input type="text" placeholder="All the best" />
      </div>
      {list.map((item, index) => (
        <div key={index}>{item.username}</div>
      ))}
    </div>
  );
}
