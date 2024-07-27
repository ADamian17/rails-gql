"use server";

import { CreateMessageDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/graphql/utils";
import { revalidatePath } from "next/cache";

export const createMessageAction = async (fd: FormData) => {
  try {
    const data = await executeApiReq(CreateMessageDocument, {
      body: fd.get("body") as string,
    });

    if (data?.createMessage?.id) {
      revalidatePath("/messages");
      return true;
    }

    throw new Error("Failed to create link");
  } catch (error) {
    return false;
  }
};
