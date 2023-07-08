import React from 'react';

import Aside from '@layouts/aside';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Aside />
            {children}
        </>
    );
}
