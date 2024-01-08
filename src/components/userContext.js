import React from "react";

const UserContext = React.createContext('reactapp')

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}

