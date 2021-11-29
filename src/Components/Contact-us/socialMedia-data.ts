type social = {
    id: number,
    name: string,
    class_name: string,
    link: string,
    newTab: boolean,
    msg?: string
}

export const socialMedias:social[] = [
    {id: 1, name: 'Telegram', class_name: 'fa fa-telegram fa-4x', link:'@Swishswhishmdfk', newTab:false, msg: 'username copied to clipboard'},
    {id: 2, name: 'Instagram', class_name: 'fa fa-instagram fa-4x', link:'https://instagram.com/10av01', newTab:true},
    {id: 3, name: 'LinkedIn', class_name: 'fa fa-linkedin-square fa-4x', link:'https://www.linkedin.com/in/ali-varaste-pour', newTab:true},
    {id: 4, name: 'Stack overflow', class_name: 'fa fa-stack-overflow fa-4x', link:'https://stackoverflow.com/users/16996769/ali-varaste-pour', newTab:true},
    {id: 5, name: 'Gmail', class_name: 'fa fa-google fa-4x', link:'ali.varaste.pour.12122@gmail.com', newTab:false, msg: 'Gmail copied to clipboard'},
    {id: 6, name: 'Github', class_name: 'fa fa-github fa-4x', link:'https://github.com/alivarastepour', newTab:true},
]