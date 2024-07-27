import { AllMessagesDocument } from '@/__generated__/graphql';
import { executeApiReq } from '@/graphql/utils';
import { createMessageAction } from '@/utils/message-actions/create-message-action';
import { Button, Container, Grid, GridCol, TextInput } from '@mantine/core';
import React from 'react'

const MessagesPage = async () => {
  const data = await executeApiReq(AllMessagesDocument)

  return (
    <Container pt={80} flex={10}>
      <h1>Messages Page</h1>

      <ul>
        {data?.messages?.map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ul>

      <form action={createMessageAction}>
        <Grid align='center'>
          <GridCol span={8}>
            <TextInput placeholder='e.g https://google.com' name='body' />
          </GridCol>
          <GridCol span={4}>
            <Button type="submit">Send</Button>
          </GridCol>
        </Grid>
      </form>
    </Container>
  )
}

export default MessagesPage
