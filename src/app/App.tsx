import { Routes, Route } from 'react-router-dom';
import Providers from './providers';
import { DummyPage } from 'pages/dummy';
import AuthPage from 'pages/auth';

import { Scaffold } from './Scaffold';

import { links } from './navigation';

import { analystModel } from 'entities/analyst';

export default function App() {
    const auth = analystModel.useAuth();

    return (
        <Providers>
            {auth.isAuthenticated() ? (
                <Routes>
                    <Route path="/" element={<Scaffold links={links} title="Naive" />}>
                        <Route index element={<DummyPage />} />
                        <Route path={links.map.path} element={<DummyPage />} />
                    </Route>
                </Routes>
            ) : (
                <AuthPage />
            )}
        </Providers>
    );
}
