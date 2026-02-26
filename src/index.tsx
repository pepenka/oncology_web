import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import App from './App.tsx'
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from "@gravity-ui/uikit";
import store from "./services/store.ts";
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={'light'}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
)
