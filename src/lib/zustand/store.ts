import { create } from 'zustand';

import { ColorSlice, createColorSlice } from './colorSlice';
import { createFormSlice, FormSlice } from './formSlice';
import { createLayoutSlice, LayoutSlice } from './layoutSlice';

// eslint-disable-next-line import/prefer-default-export
export const useBoundStore = create<FormSlice & LayoutSlice & ColorSlice>()((...a) => ({
    ...createFormSlice(...a),
    ...createLayoutSlice(...a),
    ...createColorSlice(...a)
}));
