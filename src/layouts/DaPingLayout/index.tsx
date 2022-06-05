import React from 'react';
import style from './index.module.css';

export default function DaPingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.bg}>
      {children}
    </div>
  );
}
