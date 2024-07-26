import { TypedDocumentString } from "@/__generated__/graphql";
import { Channel, createConsumer } from "@anycable/web";

const consumer = createConsumer("ws://localhost:3001/cable");

export const createSubscription = () => {
  const channel: Channel = consumer.subscriptions.create(
    { channel: "GraphqlChannel" },
    {
      connected() {
        console.log("Connected to GraphqlChannel");
      },
      disconnected() {
        console.log("Disconnected from GraphqlChannel");
      },
      received(data: any) {
        console.log("Received data:", data.data.messageAdded);
      },
    }
  );

  return channel;
};


export default consumer
