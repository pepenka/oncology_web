import {createSlice, configureStore} from '@reduxjs/toolkit';

type AppState = {
    isOpenModal: boolean;
    formHeader: string;
    formType: string;
};
const initialState: AppState = {
    isOpenModal: false,
    formHeader: '',
    formType: 'record'
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeModalState: (state) => {
            state.isOpenModal = !state.isOpenModal;
        },
        setFormHeader: (state, action) => {
            state.formHeader = action.payload;
        },
        setFormType: (state, action) => {
            state.formType = action.payload;
        }
    }
});

type FormState = {
    name: string,
    age: string,
    status: string,
    reviewText: string,
    email: string,
    phone: string,

    allowPhone: boolean,
    allowEmail: boolean,
    allowWhatsApp: boolean,
    allowTelegram: boolean,

    isPhoneWrong: boolean,
    isPhoneNecessary: boolean,
    isEmailWrong: boolean,
    isEmailNecessary: boolean,
    isAgeWrong: boolean
};
const initialFormState: FormState = {
    name: '',
    age: '',
    status: '',
    reviewText: '',
    email: '',
    phone: '',

    allowPhone: true,
    allowEmail: false,
    allowWhatsApp: false,
    allowTelegram: false,

    isPhoneWrong: false,
    isPhoneNecessary: false,
    isEmailWrong: false,
    isEmailNecessary: false,
    isAgeWrong: false
}

const formSlice = createSlice({
    name: 'form',
    initialState: initialFormState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeAge: (state, action) => {
            state.age = action.payload;
        },
        changeStatus: (state, action) => {
            state.status = action.payload;
        },
        changeReviewText: (state, action) => {
            state.reviewText = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        },
        changePhone: (state, action) => {
            state.phone = action.payload;
        },

        changeAllowPhone: (state, action) => {
            state.allowPhone =  action.payload;
        },
        changeAllowWhatsApp: (state, action) => {
            state.allowWhatsApp =  action.payload;
        },
        changeAllowTelegram: (state, action) => {
            state.allowTelegram =  action.payload;
        },
        changeAllowEmail: (state, action) => {
            state.allowEmail =  action.payload;
        },


        changeIsPhoneWrong: (state, action) => {
            state.isPhoneWrong =  action.payload;
        },
        changeIsPhoneNecessary: (state, action) => {
            state.isPhoneNecessary = action.payload;
        },
        changeIsEmailWrong: (state, action) => {
            state.isEmailWrong = action.payload;
        },
        changeIsEmailNecessary: (state, action) => {
            state.isEmailNecessary = action.payload;
        },
        changeIsAgeWrong: (state, action) => {
            state.isAgeWrong =  action.payload;
        },
    }
});

export const {changeModalState, setFormHeader, setFormType} = appSlice.actions;
export const {
    changeName,
    changeAge,
    changeStatus,
    changeReviewText,
    changeEmail,
    changePhone,
    changeAllowPhone,
    changeAllowWhatsApp,
    changeAllowTelegram,
    changeAllowEmail,
    changeIsAgeWrong,
    changeIsPhoneWrong,
    changeIsEmailWrong,
    changeIsEmailNecessary,
    changeIsPhoneNecessary
} = formSlice.actions;

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        form: formSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;