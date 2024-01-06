import React, {useContext,useState,createContext} from 'react';

export const userContext = createContext()

const Context = () => {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={user}>
            <div>
                <h1>Context</h1>
            </div>
        </userContext.Provider>
    );
}

export default Context;
