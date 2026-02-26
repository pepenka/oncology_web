import {isLetterOrSpace} from "../../../services/commonHandlers.ts";
import {TextInput} from "@gravity-ui/uikit";
import {useDispatch, useSelector} from "react-redux";
import {changeName, RootState} from "../../../services/store.ts";

export function NameInput() {
    const dispatch = useDispatch();
    const name = useSelector((state: RootState) => state.form.name);

    const handleChangeName = (value: string, lastSymbol: string) => {
        if (lastSymbol === ' ' && value[value.length - 2] === ' ') {
            return;
        }
        if (!isLetterOrSpace(lastSymbol) && value.length !== 0) {
            return;
        }
        dispatch(changeName(value));
    }

    return (
        <TextInput label={'Имя:'}
                   placeholder={'Иванов Иван'}
                   size={'xl'}
                   hasClear={true}
                   value={name}
                   note={'*Только английские и русские буквы и пробел'}
                   onChange={e => {
                       handleChangeName(e.target.value, e.target.value[e.target.value.length - 1])
                   }}
                   onBlur={e => {
                       handleChangeName(e.target.value, e.target.value[e.target.value.length - 1])
                   }}/>
    )
}