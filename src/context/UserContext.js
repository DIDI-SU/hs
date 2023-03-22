import { createContext, useState } from "react";

export const UserContext = createContext();

const UserDataProvider = ({ children }) => {
  const [isParticipate, setParticipate] = useState({
    name: "",
    paticipate: false,
  });

  const handleParticipate = () => {
    setParticipate((prve) => ({
      ...isParticipate,
      paticipate: !prve.paticipate,
    }));
  };

  return (
    <UserContext.Provider
      value={{ isParticipate, setParticipate, handleParticipate }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserDataProvider;
