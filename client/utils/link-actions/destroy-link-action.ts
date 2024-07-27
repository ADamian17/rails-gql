"use server";

import { DeleteLinkDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/graphql/utils";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const deleteLinkAction = async (fd: FormData) => {
  try {
    const data = await executeApiReq(DeleteLinkDocument, {
      id: fd.get("linkId") as string,
    });

    if (data?.deleteLink?.id) {
      revalidatePath("/");
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
  }
};
