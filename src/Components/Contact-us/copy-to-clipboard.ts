export const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value).catch(error => console.log(error));
}