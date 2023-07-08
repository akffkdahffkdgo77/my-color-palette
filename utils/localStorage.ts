'use client';

export function getLocalStorage(name: string) {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name) as string);
        }
    }

    return '';
}

export function setLocalStorage(name: string, value: unknown[]) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

export function getColors() {
    return getLocalStorage('colors') || [];
}
