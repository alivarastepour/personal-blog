const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value).catch(error => console.log(error));
}


export const handleCopy = (value: string, setShow: Function) => {
    copyToClipboard(value);
    setShow(true);
    setTimeout(()=> setShow(false), 2000);
}