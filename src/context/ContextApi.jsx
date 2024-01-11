import React, { useState, useEffect, createContext } from "react";
import { fetchDataFrimApi } from "../utils/Api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCaregoriesData(selectCategories)
    }, [selectCategories])

    const fetchSelectedCaregoriesData = (query) => {
        setLoading(true)
        fetchDataFrimApi(`search/?q${query}`).then((res) => {
            console.log(res)
            // setSearchResults(res)
            setLoading(false)
        })
    }
    return (
        <Context.Provider value={{
            loading,
            searchResults,
            selectCategories,
            mobileMenu,
            setLoading,
            setSearchResults,
            setSelectCategories,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}