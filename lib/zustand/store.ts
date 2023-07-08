'use client';

import { StateCreator, StoreApi, create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ColorSlice, createColorSlice } from './colorSlice';
import { createFormSlice, FormSlice } from './formSlice';
import { createLayoutSlice, LayoutSlice } from './layoutSlice';

type StoreType = FormSlice & LayoutSlice & ColorSlice;

type Middleware<S> = (config: StateCreator<S>) => (set: StoreApi<S>['setState'], get: StoreApi<S>['getState'], api: StoreApi<S>) => S;

const log: Middleware<StoreType> = (config) => (set, get, api) =>
    config(
        (args) => {
            // eslint-disable-next-line no-console
            console.log('  applying', args);
            set(args);
            // eslint-disable-next-line no-console
            console.log('  new state', get());
        },
        get,
        api
    );

// References : https://github.com/pmndrs/zustand#redux-devtools
export const useBoundStore = create<StoreType>()(
    devtools(
        log((...a) => ({
            ...createFormSlice(...a),
            ...createLayoutSlice(...a),
            ...createColorSlice(...a)
        })),
        {
            name: 'MyColorPalette',
            store: 'my-color-palette',
            enabled: process.env.NODE_ENV === 'development',
            anonymousActionType: 'init'
        }
    )
);
