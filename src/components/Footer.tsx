import styled from "styled-components";
import {Section, SectionTitle} from "./blocks/ContactsBlock.tsx";
import {centerContent, font} from "../GlobalStyles.ts";
import logo from '../assets/images/logo.png';
import tg from '../assets/images/TGLogo.svg';
import vk from '../assets/images/vk.svg';
import youtube from '../assets/images/youtube.svg';
import {rutubeRedirect, tgRedirect, vkRedirect} from "../services/commonHandlers.ts";

const FooterContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 20px 20px;
    gap: 50px;
    background-color: rgba(0, 177, 197, 0.2);
    position: relative;
`;

const FooterInfo = styled.p`
    ${font(20, null, 'Raleway')};
    height: max-content;
`;

const FooterLink = styled.p`
    ${font(20, null, 'Raleway')};
    height: max-content;
    cursor: pointer;
`;

const PolicyText = styled.p`
    ${font(20, null, 'Raleway')};
    margin: 8px 0;
    width: 40%;
    position: absolute;
    bottom: 0;
`;

const SocialIcon = styled.img`
    width: min-content;
    height: 24px;
    cursor: pointer;
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 15px;
    align-items: start;
`;

const LinksLogosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    align-items: center;
    gap: 15px;
`;

const LinksTextContainer = styled.div`
    ${centerContent()};
    align-items: start;
    flex-direction: column;
    gap: 15px;
    width: min-content;
`;

const FooterLogo = styled.img`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
`;

export function Footer() {
    return (
        <FooterContainer>
            <Section style={{width:'15%'}}>
                <FooterLogo src={logo} alt={'фото'}/>
                <PolicyText>Политика конфиденциальности. Все права защищены. При использовании материалов ссылка на сайт обязательна.
                    © АНО «Жить дальше» 2025</PolicyText>
            </Section>

            <Section style={{width: '10%'}}>
                <SectionTitle>Карта сайта</SectionTitle>
                <FooterInfo>Главная</FooterInfo>
                <FooterInfo>Страница</FooterInfo>
                <FooterInfo>Страница</FooterInfo>
                <FooterInfo>Страница</FooterInfo>
            </Section>

            <Section style={{width:'20%'}}>
                <SectionTitle>Связаться с нами</SectionTitle>
                <FooterInfo>+7-908-939-78-01</FooterInfo>
                <FooterInfo>jit-dalshe74@yandex.ru</FooterInfo>
                <FooterInfo style={{width: '100%'}}>Челябинск, ул. Бейвеля, 22, офисный центр «Сорока», оф.1</FooterInfo>

                <SectionTitle style={{marginTop: '15px'}}>Социальные сети</SectionTitle>
                <LinksContainer>
                    <LinksLogosContainer>
                        <SocialIcon src={tg} alt={'фото'} onClick={tgRedirect}/>
                        <SocialIcon src={vk} alt={'фото'} onClick={vkRedirect}/>
                        <SocialIcon src={youtube} alt={'фото'} onClick={rutubeRedirect}/>
                    </LinksLogosContainer>
                    <LinksTextContainer>
                        <FooterLink onClick={tgRedirect}>t.me/ano_jitdalshe7</FooterLink>
                        <FooterLink onClick={vkRedirect}>vk.com/zhitdalshe74</FooterLink>
                        <FooterLink onClick={rutubeRedirect}>rutube.ru/channel/58973110</FooterLink>
                    </LinksTextContainer>
                </LinksContainer>
            </Section>

            <Section>
                <SectionTitle>Документы</SectionTitle>
                <FooterInfo>Устав «Жить дальше»</FooterInfo>
                <FooterInfo>Свидетельство о государственной регистрации</FooterInfo>
                <FooterInfo>Свидетельство о постановке на учёт в налоговом органе</FooterInfo>
                <FooterInfo>Договор оферты АНО «Жить дальше» 2025</FooterInfo>
                <FooterInfo>Политика обработки персональных данных АНО «Жить дальше»</FooterInfo>
                <FooterInfo>Договор пожертвования для физических лиц</FooterInfo>
                <FooterInfo>Договор пожертвования для юридических лиц</FooterInfo>

                <SectionTitle style={{marginTop: '15px'}}>Реквизиты</SectionTitle>
                <FooterInfo>ИНН: 7448228314</FooterInfo>
                <FooterInfo>КПП: 744801001</FooterInfo>
                <FooterInfo>ОГРН: 1207400038053</FooterInfo>
                <FooterInfo>Номер расчетного счета: 40703810972000000140</FooterInfo>
                <FooterInfo>Корреспондентский счет банка: 30101810700000000602</FooterInfo>
                <FooterInfo>БИК: 047501602</FooterInfo>
                <FooterInfo>Местонахождение учреждения банка: гор. Челябинск</FooterInfo>
            </Section>
        </FooterContainer>
    )
}