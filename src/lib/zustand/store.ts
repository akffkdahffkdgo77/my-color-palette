import { create } from 'zustand';

import { ColorSlice, createColorSlice } from 'lib/zustand/colorSlice';
import { createFormSlice, FormSlice } from 'lib/zustand/formSlice';
import { createLayoutSlice, LayoutSlice } from 'lib/zustand/layoutSlice';

// eslint-disable-next-line import/prefer-default-export
export const useBoundStore = create<FormSlice & LayoutSlice & ColorSlice>()((...a) => ({
    ...createFormSlice(...a),
    ...createLayoutSlice(...a),
    ...createColorSlice(...a)
}));
