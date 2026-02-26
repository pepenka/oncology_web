import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../../services/store.ts";
import {centerContent, font} from "../../../GlobalStyles.ts";
import {ReviewForm} from "./ReviewForm.tsx";
import {RecordForm} from "./RecordForm.tsx";

const FormContainer = styled.form`
    ${centerContent};
    flex-direction: column;
    align-items: start;
    gap: 15px;
    height: max-content;
    width: min-content;
    min-width: 400px;

    padding: 40px 45px;
`;

const FormHeader = styled.span`
    ${font(26, null, 'Golos')};
    margin-bottom: 10px;
`;

export function ModalForm() {
    const header = useSelector((state: RootState) => state.app.formHeader);
    const formType = useSelector((state: RootState) => state.app.formType);

    return (
        <FormContainer>
            <FormHeader>{header}</FormHeader>
            {formType === "review" ? (<ReviewForm />) : <RecordForm />}
        </FormContainer>
    )
}