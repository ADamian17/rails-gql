"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Group, Code } from '@mantine/core';
import { IconSettings, IconHome, IconMessage } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';

import classes from './DashboardLayout.module.scss';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/messages', label: 'Messages', icon: IconMessage },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function DashboardLayout({ children, logoutCta }: { children: React.ReactNode, logoutCta?: React.ReactNode }) {
  const [active, setActive] = useState('home');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label.toLowerCase() === active || undefined}
      href={item.link}
      key={item.label}
      prefetch
      onClick={(event) => {
        setActive(item.label.toLowerCase());
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <div className={classes.dashboardLayout}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <MantineLogo size={28} />
            <Code fw={700}>v3.1.2</Code>
          </Group>
          {links}
        </div>

        <div className={classes.footer}>
          {logoutCta}
        </div>
      </nav>

      <div>
        {children}
      </div>
    </div>
  );
}
