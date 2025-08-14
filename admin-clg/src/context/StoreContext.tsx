// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {

//     const url = "adminclg-backend.vercel.app";
//     // const [food_list, setFoodList] = useState([]);
//     // const [cartItems, setCartItems] = useState({});
//     const [render,setRender] = useState(false);
//     const [token, setToken] = useState("");

//     useEffect(() => {
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"))
//                 setRender(false)
//             }
//     }, []);

//     const contextValue = {
//         url,
//         token,
//         setToken,
//         render,
//         setRender,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )

// }

// export default StoreContextProvider;






import { createContext, useEffect, useState} from "react";
import type { ReactNode } from 'react';
// import axios from "axios";

interface StoreContextType {
    url: string;
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    render: boolean;
    setRender: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StoreContextProviderProps {
    children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = (props: StoreContextProviderProps) => {

    const url = "adminclg-backend.vercel.app"
    // const [food_list, setFoodList] = useState([]);
    // const [cartItems, setCartItems] = useState({});
    const [render,setRender] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token") || "")
                setRender(false)
            }
    }, []);

    const contextValue: StoreContextType = {
        url,
        token,
        setToken,
        render,
        setRender,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;
