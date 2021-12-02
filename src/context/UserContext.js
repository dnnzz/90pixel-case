import { createContext , useState } from "react";
import axios from 'axios';

export const UserContext = createContext({ email: '', auth: false });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '', auth: false});
  const login = async (email) => {
    const res = await axios.get(`https://61a6142d8395690017be902e.mockapi.io/api/users?email=${email}`);
    if(res.data !== []){
    setUser({
      email: res.data[0].email,
      auth: true,
    }) 
    }else{
        return "bad request";
    }
  };
  const logout = () => {
    setUser((user) => ({
      name: '',
      auth: false,
    }));
  };
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }