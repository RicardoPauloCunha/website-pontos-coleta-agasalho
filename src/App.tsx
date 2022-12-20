import { DonationPointContextProvider } from './contexts/donationPoint';
import PagesRoutes from './routes';
import GlobalStyles from './styles/global';

const App = () => {
    return (
        <DonationPointContextProvider>
            <GlobalStyles />
            <PagesRoutes />
        </DonationPointContextProvider>
    )
}

export default App;
