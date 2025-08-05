//Context creation
//provider
//consumer lengthy remove by useContext hook
//useContext hook

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";


let API = import.meta.env.VITE_API_URL;

const initialState = {
    isLoading : true,
    query:"JavaScript",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = createContext();


const AppProvider = ({children}) => {

    //const [state, setState] = useState("");

    const [state, dispatch] = useReducer(reducer ,initialState);

    const fetchApiData = async (url) => {

        dispatch({type: "SET_LOADING"});

        try {
            const res = await fetch(url);
            const data = await res.json();
             console.log(data);
             dispatch({
                type: "GET_STORIES",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
             });
        } catch (error) {
            console.log(error);
        }
    }

    //remove post logic
    const removePost = (post_ID) => {
        dispatch({
            type:"REMOVE_POST",
            payload: post_ID,
        });
    }

    //search post
    const searchPost = (searchQuery) => {
        dispatch({
            type:"SEARCH_QUERY",
            payload: searchQuery  //In the place of payload we give any other name
        })
    }

    //pagination
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        });
    };

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    //For fetch the data from api
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return(
        <AppContext.Provider value={{...state, removePost, searchPost, getPrevPage, getNextPage}}>
            {children}
        </AppContext.Provider>
    )
};

//custom hook create by "use" keyword

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}