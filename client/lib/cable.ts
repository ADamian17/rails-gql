import { TypedDocumentString } from "@/__generated__/graphql";
import { Channel, createConsumer } from "@anycable/web";
import { revalidatePath } from "next/cache";

const consumer = createConsumer("ws://localhost:3001/cable");

export const createSubscription = <Result, Variables = Record<string, unknown>>(
  query: TypedDocumentString<Result, Variables>,
  variables?: Variables,
) => {
  const channel = consumer.subscriptions.create({ channel: "GraphqlChannel" });

  function execute(
    query: TypedDocumentString<Result, Variables>,
    variables?: Variables,
  ) {
    channel.perform("execute", { query, variables });
  }

  channel.channel.connected = function () {
    console.log("Connected to GraphqlChannel");
    execute(query, variables);
  };

  channel.channel.disconnected = function () {
    console.log("Disconnected from GraphqlChannel");
  };

  return channel;
};

export default consumer;
