export type HeaderProps = {
    id: number;
    name: string;
    href: string;
}[];
export type ClientsMarqueProps = {
    id:number;
    photo:string;
    name:string;
}[];

export type ContactDataProps = {
    icon:string;
    title: string;
    value:string;
    sub:string;
    color:string;
    bg: string;
}[];
export type MachineryProps = {
    name:string;
    image:string;
}[];

export type ServiceProps = {
    id: number;
    title:string;
    subtitle:string;
    desc:string;
    asset:string;
    theme:string;
}[];

export type ProjectProps={
    id: number;
    title:string;
    category:string;
    location:string;
    status:string;
    asset:string;
    theme:string;
}[];