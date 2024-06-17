import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppNav } from './AppNav';
import { HomePage, AggregateTierlistPage, MenuSavesPage, TierlistPage, ErrorPage } from './Pages';

export class AppMainRouter extends React.Component {
    public render(): React.ReactNode {
        return (
            <BrowserRouter>
                <AppNav />
                <Routes>
                    <Route path="/tierlist/" element={<HomePage />} />
                    <Route path="/tierlist/aggregate" element={<AggregateTierlistPage />} />
                    <Route path="/tierlist/menu" element={<MenuSavesPage />} />
                    <Route path="/tierlist/create/:username?" element={<TierlistPage canEdit={true}/>} />
                    <Route path="/tierlist/view/:username" element={<TierlistPage canEdit={false} />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
