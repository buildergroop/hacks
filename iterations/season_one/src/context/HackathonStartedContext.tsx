import React, { useState, useContext } from "react";

const HackathonStartedContext = React.createContext(null);

export const useHackathonStartedContext = () =>
  useContext(HackathonStartedContext);

export const HackathonStartedContextProvider = ({ children }: any) => {
  const [hackathonStarted, setHackathonStarted] = useState<string>("");

  return (
    <HackathonStartedContext.Provider
      value={{ hackathonStarted, setHackathonStarted } as any}
    >
      {children}
    </HackathonStartedContext.Provider>
  );
};
