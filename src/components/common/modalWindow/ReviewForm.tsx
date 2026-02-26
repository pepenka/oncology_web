import {Alert, Select, TextArea} from "@gravity-ui/uikit";
import {AgeInput} from "./AgeInput.tsx";
import {NameInput} from "./NameInput.tsx";
import {useDispatch, useSelector} from "react-redux";
import {changeReviewText, changeStatus, RootState} from "../../../services/store.ts";
import {ReviewData} from "../../../services/types.ts";
import {Button} from "../ActionButton.tsx";
import {useState} from "react";

export function ReviewForm() {
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.form.status);
    const reviewText = useSelector((state: RootState) => state.form.reviewText);

    const [alertData, setAlertData] = useState<{ title: string, visible: boolean, type: string }>({
        title: '',
        visible: false,
        type: 'error',
    });

    const name = useSelector((state: RootState) => state.form.name);
    const age = useSelector((state: RootState) => state.form.age);
    const isAgeWrong = useSelector((state: RootState) => state.form.isAgeWrong);

    const statuses = [
        {value: 'Пациент', content: 'Пациент'},
        {value: 'Родственник пациента', content: 'Родственник пациента'},
        {value: 'Другое', content: 'Другое'}
    ];

    const handleSubmit = () => {
        if (name.length === 0) {
            setAlertData({title: 'Ошибка в поле Имя!', visible: true, type: 'error'});
            return;
        }

        if (isAgeWrong || age.length === 0) {
            setAlertData({title: 'Ошибка в поле Возраст!', visible: true, type: 'error'});
            return;
        }

        if (status === '') {
            setAlertData({title: 'Не выбран статус!', visible: true, type: 'error'});
            return;
        }

        if (reviewText.length === 0) {
            setAlertData({title: 'Поле с текстом отзыва не должно быть пустым!', visible: true, type: 'error'});
            return;
        }

        setAlertData({title: 'Ошибка в поле Email!', visible: false, type: 'error'});
        const data: ReviewData = {
            name: name,
            age: age,
            status: status,
            reviewText: reviewText
        }

        // тут должен быть запрос к бэку
        console.log(data);
        setAlertData(
            {
                title: 'Отзыв успешно отправлен! Он появится тут, если пройдёт модерацию.',
                visible: true,
                type: 'success'
            });
    }

    const handleCloseAlert = () => {
        setAlertData(prev => ({...prev, visible: false, type: 'error'}));
    };

    return (
        <>
            <NameInput/>
            <AgeInput/>
            <Select width={'max'}
                    size={'xl'}
                    options={statuses}
                    label={'Статус:'}
                    onUpdate={(e) => {
                        dispatch(changeStatus(e[0]));
                        setAlertData({title: '', visible: false, type: 'error'});
                    }}
                    value={[status]}/>
            <TextArea
                placeholder={'Текст отзыва...'}
                size={'xl'}
                hasClear={true}
                value={reviewText}
                onChange={e => {
                    dispatch(changeReviewText(e.target.value));
                }}/>
            <Button fontSize={16}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                Отправить
            </Button>
            <Alert
                style={
                    {
                        display: alertData.visible ? 'block' : 'none',
                        alignItems: 'center',
                        width: 'fit-content',
                        textWrap: 'wrap',

                    }}
                title={alertData.title}
                theme={alertData.type === 'error' ? 'danger' : 'success'}
                onClose={handleCloseAlert}
            />
        </>
    )
}