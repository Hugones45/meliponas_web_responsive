import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [dataValue, setDataValue] = useState([])

    const fetchData = async () => {
        const resp = await fetch(url)
        const respData = await resp.json()

        setDataValue(respData)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { dataValue }

}