import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [value, setValue] = useState('');

    const doFetch = async() => {
        await fetch(url).then(a => a.json()).then(b => setValue(b.location.country))
    }

    useEffect(() => {
        doFetch()
    },[])
    return {value}
}
export default useFetch;