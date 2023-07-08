'use client';

import { useRouter } from 'next/navigation';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    const navigate = useRouter();

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen bg-[#121212]">
            <div className="flex h-full flex-col items-center justify-center">
                <ExclamationTriangleIcon className="h-[200px] w-[200px] text-red-500" />
                <h2 className="mb-10 text-6xl text-slate-50">404</h2>
                <div className="flex gap-5">
                    <button type="button" className="rounded border border-slate-50 bg-slate-50 p-2.5 text-slate-900 hover:opacity-70" onClick={() => navigate.replace('/')}>
                        홈 페이지로 돌아가기
                    </button>
                    <button type="button" className="rounded border border-slate-50 p-2.5 text-slate-50 hover:opacity-70" onClick={() => navigate.back()}>
                        이전 페이지로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
}
