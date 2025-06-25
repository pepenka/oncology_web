import styled from 'styled-components'
import {centerContent, font} from "../../GlobalStyles.ts";
import leftImage from '../../assets/images/leftAboutUsPic.png';
import rightImage from '../../assets/images/rightAboutUsPic.png';

const AboutUsArticle = styled.article`
    background-color: rgba(0, 177, 197, 0.2);
    border-radius: 70px;
    height: 640px;
    ${centerContent()};
    flex-direction: column;
    gap: 40px;
    padding-bottom: 60px;
    position: relative;
    overflow: hidden;
`;

const AboutUsHeader = styled.h1`
    ${font(70, null, 'Golos')};
    justify-self: center;
    align-self: center;
`;

const AboutUsText = styled.p`
    ${font(26, 46, 'Raleway')};
    justify-self: center;
    align-self: center;
    width: 50%;
    z-index: 6;
`;

const AboutUsLeftImage = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 28%;
    height: auto;
    z-index: 5;
`;

const AboutUsRightImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 31%;
    height: auto;
    z-index: 5;
`;

export function AboutUsBlock() {

    return (
        <AboutUsArticle id={'about'}>
            <AboutUsHeader>О нас</AboutUsHeader>
            <AboutUsText>
                Мы — команда онкопсихологов, волонтеров и людей с опытом онкологических заболеваний, которые
                встретились, чтобы помогать людям, столкнувшимся с серьезным заболеванием у себя или у близкого
                человека. Мы хорошо знаем, что такое онкодиагноз, и всегда готовы поддержать вас и ваших близких.
            </AboutUsText>
            <AboutUsLeftImage src={leftImage} alt={'фото'}/>
            <AboutUsRightImage src={rightImage} alt={'фото'}/>
        </AboutUsArticle>
    )
}