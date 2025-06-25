import styled from 'styled-components'
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Banner, Event} from "../../services/types.ts";
import {Swiper as SwiperReact, SwiperSlide} from "swiper/react";
import {font} from "../../GlobalStyles.ts";
import {redirectHandler} from "../../services/commonHandlers.ts";

const CustomSwiper = styled(SwiperReact)`
    height: max-content;
    min-height: 640px;
`;

const Slide = styled(SwiperSlide)<{ img?: string }>`
    width: 100%;
    height: 100%;
    min-height: 600px;
    display: flex;
    align-items: center;
    padding-bottom: 50px;
    gap: 10%;
    border-radius: 70px;
    cursor: pointer;

    background-image: url(${props => props.img ?? ''});
    ${props => props.img
            ? undefined
            : 'background-color: rgba(0, 177, 197, 0.2);' +
            'justify-content: space-between;'};
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
`;

const SlideText = styled.h2<{ font: string }>`
    width: 60%;
    margin: 0 0 0 5%;

    ${props => font(26, 38, props.font)};
`;

const SlideImg = styled.img`
    width: 500px;
    height: 500px;
    margin-right: 5%;
    border-radius: 40px;
`;

interface SwiperProps {
    slides: Banner[] | Event[];
    isEvents: boolean;
}


export function Swiper({slides, isEvents}: SwiperProps) {
    if (!isEvents) {
        return (
            <CustomSwiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}>
                {(slides as Banner[]).map((item: Banner, index: number) => (
                    <Slide key={index} img={item.photoUrl}
                           onClick={() => {
                               if(item.redirectOnClickUrl) {
                                   redirectHandler(item.redirectOnClickUrl);
                               }
                           }}
                    >
                        <SlideText font={'Golos'}
                                   style={{
                                       backgroundColor: 'white',
                                       padding: '20px',
                                       borderRadius: '30px'
                                   }}>
                            {item.title}
                        </SlideText>
                    </Slide>
                ))}
            </CustomSwiper>
        )
    }

    return (
        <CustomSwiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            loop={true}>
            {slides.map((item: Event, index: number) => (
                <Slide key={index}>
                    <SlideText font={'Raleway'}>
                        {item.title}
                    </SlideText>
                    <SlideImg src={item.photoUrl} alt={'фото'}/>
                </Slide>
            ))}
        </CustomSwiper>
    )
}