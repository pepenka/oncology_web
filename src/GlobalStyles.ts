import {css} from "styled-components";

export const font = (size: number, lineHeight: number | null, family: string) => css`
    font-size: ${size}px;
    line-height: ${lineHeight ? `${lineHeight}px` : 'normal'};
    font-family: ${family};
    text-align: justify;
`;

export const centerContent = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
`;