import {useDispatch, useSelector} from "react-redux";
import {Modal} from "@gravity-ui/uikit";
import {changeModalState, RootState} from "../../../services/store.ts";
import {ModalForm} from "./ModalForm.tsx";

export function ModalWindow() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.app.isOpenModal);

    return (
        <Modal open={isOpen} onOpenChange={() => {dispatch(changeModalState())}}>
            <ModalForm />
        </Modal>
    );
}