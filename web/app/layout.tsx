import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: '習慣ドット', description: '今日の小さな「できた」をドットで残す、アカウント不要の習慣記録アプリ。' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ja"><body>{children}</body></html>; }
