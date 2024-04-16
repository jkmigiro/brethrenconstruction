type Alignment = "top" | "middle" | "bottom"| "stretch"
type Justify = "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly"
type TitleDescText = {
    title: string,
    titleDesc: string,
    text: string,
    align: Alignment,
    justify: Justify
};
type TitleList = {
    title: string,
    titleDesc: string,
    data: { description: string; title: string }[],
    align: Alignment,
    justify: Justify
};


export interface TitleDescTextProps {
    props: TitleDescText,
}
export interface TitleListProps {
    props: TitleList,
}
export interface ServicesDataInterface{
    title: string,
    description: string
}

export {};