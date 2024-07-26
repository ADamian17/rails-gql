import Link from 'next/link';

import { Group, Code, Anchor } from '@mantine/core';
import { IconSettings, IconLink, IconMessage } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';

import classes from './DashboardLayout.module.scss';

const data = [
  { link: '/messages', label: 'Messages', icon: IconMessage },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function DashboardLayout({ children, logoutCta }: { children: React.ReactNode, logoutCta?: React.ReactNode }) {
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={undefined}
      href={item.link}
      key={item.label}
      prefetch
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
            <Anchor href="/" component={Link}>
              <MantineLogo size={28} />
            </Anchor>
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
