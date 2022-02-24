import React, { useState, useContext } from "react";

const HackathonStartedContext = React.createContext<{
	hackathonStarted: boolean;
	setHackathonStarted: (hackathonStarted: boolean) => void;
}>({ hackathonStarted: false, setHackathonStarted: () => void 0 });

export const useHackathonStartedContext = () =>
	useContext(HackathonStartedContext);

export const HackathonStartedContextProvider: React.FC = ({ children }) => {
	const [hackathonStarted, setHackathonStarted] = useState<boolean>(false);

	return (
		<HackathonStartedContext.Provider
			value={{ hackathonStarted, setHackathonStarted }}
		>
			{children}
		</HackathonStartedContext.Provider>
	);
};
