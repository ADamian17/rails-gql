import { AllMessagesDocument, MessageAddedDocument } from '@/__generated__/graphql';
import { executeApiReq } from '@/graphql/utils';
import { createSubscription } from '@/lib/cable';
import { createMessageAction } from '@/utils/message-actions/create-message-action';
import { Button, Container, Grid, GridCol, TextInput } from '@mantine/core';
import React from 'react'

const MessagesPage = async () => {
  const subscription = createSubscription(MessageAddedDocument)
  const data = await executeApiReq(AllMessagesDocument)

  let messages = [...(data?.messages ?? [])]

  const refetch = async () => {
    const data = await executeApiReq(AllMessagesDocument)
    messages = [...(data?.messages ?? [])]
  }

  subscription.channel.receive = function (res: any) {
    if (res?.result?.data?.messageAdded?.id) {
      refetch()
    }
  };

  return (
    <Container pt={80} flex={10}>
      <h1>Messages Page</h1>

      <ul>
        {messages.map((message) => (
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
