import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase";
import { AppContext } from "./AuthContext";




export const ChatContext = createContext();

export const ChatContextprovider = ({ children }) => {
    const { currentuser } = useContext(AppContext);

    const INITIAL_STATE = {
        chatId: "null",
        user: {},
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                const newChatId =currentuser.uid > action.payload.uid
        ? currentuser.uid + action.payload.uid
        : action.payload.uid + currentuser.uid
                return {
                    user: action.payload,
                    chatId: newChatId,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    useEffect(() => {
        if (currentuser) {
            // Dispatch action to change the user when currentuser changes
            dispatch({ type: "CHANGE_USER", payload: currentuser });
        }
    }, [currentuser]);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
