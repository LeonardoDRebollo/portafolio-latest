import React from "react";
import { AccessIcon, CSharpIcon, CSSIcon, HtmlIcon, JavaIcon, JavaScriptIcon, MysqlIcon, NodeIcon, ReactIcon, TypescriptIcon, ViteIcon, WordPressIcon } from "../../../public/svg-logos/svg-icons";

export interface TecnologiesInterface {
    id: number,
    name: string,
    icon: React.ReactNode;
}

export const TecnologiesList: TecnologiesInterface[] = [
    {
        id: 1,
        name: "HTML",
        icon: <HtmlIcon height={50} width={50} />, 
    },
    {
        id: 2,
        name: "CSS",
        icon: <CSSIcon height={50} width={50} />,
    },
    {
        id: 3,
        name: "Java",
        icon: <JavaIcon height={50} width={50} />,
    },
    {
        id: 4,
        name: "C#",
        icon: <CSharpIcon height={50} width={50} />,
    },
    {
        id: 5,
        name: "JavaScript",
        icon: <JavaScriptIcon height={50} width={50}/>,
    },
    {
        id: 6,
        name: "Access",
        icon: <AccessIcon height={50} width={50}/>,
    },
    {
        id: 7,
        name: "MysqlIcon",
        icon: <MysqlIcon height={50} width={50}/>,
    },
    {
        id: 8,
        name: "NodeIcon",
        icon: <NodeIcon height={50} width={50}/>,
    },
    {
        id: 9,
        name: "ReactIcon",
        icon: <ReactIcon height={50} width={50}/>,
    },
    {
        id: 10,
        name: "TypescriptIcon",
        icon: <TypescriptIcon height={50} width={50}/>,
    },
    {
        id: 11,
        name: "ViteIcon",
        icon: <ViteIcon height={50} width={50}/>,
    },
    {
        id: 12,
        name: "WordPressIcon",
        icon: <WordPressIcon height={50} width={50}/>,
    }

];

