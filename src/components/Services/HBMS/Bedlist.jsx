import React, { createContext, useContext, useState } from 'react'

const ListContext = createContext()

export const Bedlist =({children})=>{
    const [mybedlist , setMybedlist] =useState([])

    return(
        <ListContext.Provider>
            {children}
        </ListContext.Provider>
    )
}

export const useList = () =>useContext(ListContext)