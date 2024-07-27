"use server";

import { CreateLinkDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/graphql/utils";
import { revalidatePath } from "next/cache";

type LinkState = {
  isValid: boolean;
};

export const createLinkAction = async (prev: LinkState, fd: FormData) => {
  try {
    const data = await executeApiReq(CreateLinkDocument, {
      description: fd.get("description") as string,
      url: fd.get("url") as string,
    });

    if (data?.createLink?.id) {
      revalidatePath("/");
      return { ...prev, isValid: true };
    }

    throw new Error("Failed to create link");
  } catch (error) {
    return { ...prev, isValid: false };
  }
};
