'use client';

import { ArrowPathIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

type ErrorType = { error: Error; reset: () => void };

export default function Error({ error, reset }: ErrorType) {
    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-screen bg-[#121212]">
            <div className="flex h-full flex-col items-center justify-center">
                <ExclamationCircleIcon className="h-[200px] w-[200px] text-red-500" />
                <h2 className="mb-8 text-center text-4xl leading-10 text-slate-50">
                    문제가 발생하였습니다.
                    <br />
                    페이지를 새로고침 해주세요.
                </h2>
                <h3 className="mb-5 text-2xl font-bold text-slate-50">
                    <i>{error.message}</i>
                </h3>
                <button type="button" onClick={() => reset()} className="group flex items-center gap-2.5 rounded border border-slate-50 bg-slate-50 p-2.5 text-slate-900 hover:opacity-70">
                    <ArrowPathIcon className="h-4 w-4 group-hover:animate-spin" />
                    새로고침
                </button>
            </div>
        </div>
    );
}
