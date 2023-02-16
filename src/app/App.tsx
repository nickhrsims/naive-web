import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Providers from './providers';
import { DummyPage } from 'pages/dummy';

import { Scaffold } from './Scaffold';

import { links } from './navigation';

export default function App() {
    return (
        <Providers>
            <Routes>
                <Route path="/" element={<Scaffold links={links} title="Naive" />}>
                    <Route index element={<DummyPage />} />
                    <Route path={links.map.path} element={<DummyPage />} />
                </Route>
            </Routes>
        </Providers>
    );
}
