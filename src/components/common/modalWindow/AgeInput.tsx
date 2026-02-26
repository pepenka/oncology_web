import {isNumber} from "../../../services/commonHandlers.ts";
import {TextInput} from "@gravity-ui/uikit";
import {useDispatch, useSelector} from "react-redux";
import {changeAge, changeIsAgeWrong, RootState} from "../../../services/store.ts";

export function AgeInput() {
    const dispatch = useDispatch();
    const age = useSelector((state: RootState) => state.form.age);
    const isAgeWrong = useSelector((state: RootState) => state.form.isAgeWrong);

    const handleChangeAge = (value: string) => {
        if (!isNumber(value[value.length - 1]) && value.length !== 0) {
            return;
        }

        if(value[0] === "0") {
            value.replace("0", "");
            return;
        }

        const age: number = parseInt(value);
        console.log("age", age);
        if (age >= 0 || isNaN(age)) {
            age <= 122 || isNaN(age) ? dispatch(changeAge(value)) : undefined;
            age < 18 ? dispatch(changeIsAgeWrong(true)) : dispatch(changeIsAgeWrong(false));
            return;
        }
        dispatch(changeIsAgeWrong(true));
    }

    return (
        <TextInput label={'Возраст:'}
                   placeholder={'20'}
                   size={'xl'}
                   hasClear={true}
                   value={age}
                   error={isAgeWrong}
                   errorMessage={'Только числа от 18 до 122'}
                   onChange={e => {
                       handleChangeAge(e.target.value);
                   }}
                   onBlur={(e) => {
                       parseInt(e.target.value) < 18
                           ? dispatch(changeIsAgeWrong(true))
                           : dispatch(changeIsAgeWrong(false));
                   }}/>
    )
}