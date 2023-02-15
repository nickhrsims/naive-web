import Providers from './providers';
import { DummyPage } from 'pages/dummy';

export default function App() {
    return (
        <Providers>
            <DummyPage />
        </Providers>
    );
}
