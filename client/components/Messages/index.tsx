"use client";
import consumer from '@/config/cable';
import React, { useEffect, useState } from 'react'

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const channel = consumer.cable.subscribeTo('ChatChannel', { id: "1" })

    let unbindOnMessage = channel.on('message', (msg) => { console.log(msg); })

    return () => {
      unbindOnMessage()
      channel.disconnect()
    }
  }, [consumer])

  return (
    <pre>
      {JSON.stringify(messages, null, 2)}
    </pre>
  )
}

export default Messages
