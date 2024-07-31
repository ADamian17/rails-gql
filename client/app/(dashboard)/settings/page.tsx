import UpdateUser from '@/components/UpdateUser'
import UserSettingsContainer from '@/containers/UserSettingsContainer'
import { Container, Divider, Grid, GridCol, Group, Paper, Space, Text, Title } from '@mantine/core'
import React from 'react'

const DashboardPage = async () => {
  return (
    <Container pt={80} flex={10}>
      <UserSettingsContainer />
    </Container>
  )
}

export default DashboardPage
