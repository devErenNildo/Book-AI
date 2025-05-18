// components/LogoText.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo-text.png';
import logoDark from '@/public/logo-text-dark.png';
import { useTheme } from '@/app/context/ThemeContext';

export default function LogoText() {

  const { theme, isMounted } = useTheme();
  if (!isMounted) return null;

  return (
    <Link href="/">
      <Image
        src={theme === 'dark' ? logoDark : logo}
        alt="Nome estilizado Book AI"
        width={100}
        height={40}
        priority
      />
    </Link>
  );
}
