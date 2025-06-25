import styled from 'styled-components'
import {centerContent, font} from "../../GlobalStyles.ts";

const Article = styled.article`
    width: 100%;
    ${centerContent()};
    justify-content: space-between;
    gap: 10%;
    align-items: stretch;
    overflow: hidden;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 45%;
    ${centerContent()};
    align-self: start;
    flex-direction: column;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    ${centerContent()};
    flex-direction: column;
    gap: 25px;
`;

const Button = styled.button`
    background-color: #47D072;
    border-radius: 20px;
    color: white;
    ${font(24, null, 'Raleway')};

    &:hover {
        transition: background-color 0.4s ease;
        background-color: green;
    }
`;

const Header = styled.h2`
    ${font(52, null, 'Golos')};
    justify-self: center;
    align-self: center;
    height: max-content;
`;

const Text = styled.p`
    ${font(26, 40, 'Raleway')};
    justify-self: center;
    align-self: center;
    width:  100%;
`;

const Image = styled.img`
`;

const ImageContainer = styled.div`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 60px;
    width: 45%;
    //height: 560px;
    ${centerContent()};
    align-items: end;
    overflow: hidden;
`;

interface ArticleProps {
    title: string;
    text: string;
    photo: string;
    isReversed: boolean;
    buttonHandler: () => void;
    buttonText: string;
    height: number;
    imgWidth?: number;
}

export function ArticleBlock({title, text, photo, isReversed, buttonHandler, buttonText, height, imgWidth}: ArticleProps) {

    if(isReversed) {
        return (
            <Article style={{height: `${height}px`}}>
                <ImageContainer  style={{height: `${height}px`}}>
                    <Image src={photo} alt={'фото'} style={{ width: `${imgWidth}%` }} />
                </ImageContainer>
                <ContentContainer>
                    <TextWrapper>
                        <Header>{title}</Header>
                        <Text>{text}</Text>
                    </TextWrapper>
                    <Button onClick={buttonHandler}>{buttonText}</Button>
                </ContentContainer>
            </Article>
        );
    }

    return (
        <Article style={{height: `${height}px`}}>
            <ContentContainer>
                <TextWrapper>
                    <Header>{title}</Header>
                    <Text>{text}</Text>
                </TextWrapper>
               <Button onClick={buttonHandler}>{buttonText}</Button>
            </ContentContainer>
            <ImageContainer  style={{height: `${height}px`}}>
                <Image src={photo} alt={'фото'}/>
            </ImageContainer>
        </Article>
    );
}