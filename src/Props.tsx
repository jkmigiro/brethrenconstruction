type Alignment = "top" | "middle" | "bottom"| "stretch"
type Justify = "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly"
type TitleDescText = {
    title: string,
    titleDesc: string,
    text: string,
    align: Alignment,
    justify: Justify
};


export interface TitleDescTextProps {
    props: TitleDescText,
}

export {};