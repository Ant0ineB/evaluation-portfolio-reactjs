import React,{useState, useEffect} from "react";

class App extends React.Component {

  
  
 

export default function App(){
  const[users,setUsers] = useState([]);
  
  const getUsers = async () => {
  const res = await fetch("https://api.github.com/users/github-john-doe");
  const json = await res.json();
  setUsers(json);
  }
  useEffect(() => {
    getUsers();
  },[])

  render() {
    return(
    )
  }
};
}