import { notFound } from 'next/navigation';

// not found infinite loading
// References : https://github.com/vercel/next.js/discussions/40000#discussioncomment-6291368
const NotFoundCatchAll = () => notFound();

export default NotFoundCatchAll;
