import { IconLogout } from '@tabler/icons-react'
import React from 'react'

import { logoutAction } from './action'

import classes from './LogoutCta.module.scss'

const LogoutCta = () => (
  <form action={logoutAction} className={classes.link}>
    <IconLogout className={classes.linkIcon} stroke={1.5} />
    <input type="submit" value="Logout" />
  </form>
)

export default LogoutCta
