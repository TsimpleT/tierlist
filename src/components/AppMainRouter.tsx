import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TierlistApp } from './TierlistApp';
import { AppNav } from './AppNav';
import { HomeApp } from './HomeApp';

interface IProps {}
interface IState {}

export class AppMainRouter extends React.Component<IProps, IState> {
    public render(): React.ReactNode {
        return (
            <BrowserRouter>
                <AppNav />
                <Routes>
                    <Route path="/tierlist/" element={<HomeApp />} />
                    <Route path="/tierlist/create/:username?" element={<TierlistApp canEdit={true}/>} />
                    <Route path="/tierlist/view/:username" element={<TierlistApp canEdit={false} />} />
                    <Route path="*" element={<div>Error 404: this page does not exist</div>} />
                </Routes>
            </BrowserRouter>
        );
    }
}
