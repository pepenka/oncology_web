import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import {font} from "../GlobalStyles.ts";
import {ActionButton} from "./common/ActionButton.tsx";

const HeaderContainer = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    z-index: 333;
    align-items: center;
    justify-content: space-between;
    padding: 20px 3%;
    background-color: #FCFEF1;
`;

const LeftLinks = styled.nav`
    display: flex;
    gap: 30px;
    width: 39%;
`;

const RightLinks = styled.nav`
    display: flex;
    gap: 30px;
    margin-right: 30px;
`;

const Logo = styled.img`
    height: auto;
    width: 10%;
    justify-self: center;
`;

const RightSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonColumn = styled.div`
    display: flex;
    gap: 10px;
    height: max-content;
    width: max-content;
`;

const NavLink = styled.a`
    color: black;
    ${font(20, null, 'Raleway')};

    transition: color 0.3s;

    &:hover {
        color: #0066cc;
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <LeftLinks>
                <NavLink href="#about">О нас</NavLink>
                <NavLink href="#reviews">Проекты</NavLink>
                <NavLink href="#news">Новости</NavLink>
                <NavLink href="#events">События</NavLink>
                <NavLink href="#contacts">Контакты</NavLink>
            </LeftLinks>

            <Logo src={logo} alt="фото"/>

            <RightSection>
                <RightLinks>
                    <NavLink href="#volunteers">Волонтёрам</NavLink>
                    <NavLink href="#record">Пациентам</NavLink>
                </RightLinks>

                <ButtonColumn>
                    <NavLink href="#record">
                        <ActionButton fontSize={18}
                                      isNeedOnClickHandler={false}
                                      buttonText={'Мне нужна помощь'} />
                    </NavLink>
                    <NavLink href="#donation">
                        <ActionButton fontSize={18}
                                      isNeedOnClickHandler={false}
                                      buttonText={'Я хочу помочь'}
                                      child={<><span style={{color: 'red', fontSize: '18px'}}>♥</span>&nbsp;&nbsp;</>}/>
                    </NavLink>
                </ButtonColumn>
            </RightSection>
        </HeaderContainer>
    );
};