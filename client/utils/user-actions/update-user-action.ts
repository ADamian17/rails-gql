"use server";

import { UpdateUserDocument } from "@/__generated__/graphql";
import { executeApiReq } from "@/graphql/utils";
import { revalidatePath } from "next/cache";

type UserActionState = {
  isValid: boolean;
};

export const updateUserAction = async (prev: UserActionState, fd: FormData) => {
  try {
    const data = await executeApiReq(UpdateUserDocument, {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
    });

    if (data?.updateUser?.updatedUser?.id) {
      revalidatePath("/settings");
      return { isValid: true };
    }

    throw new Error("Failed to create link");
  } catch (error) {
    return { isValid: false };
  }
};
