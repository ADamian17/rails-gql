"use client";
import React, { ElementRef, useEffect, useState } from "react";
import { Button, Drawer, Group, Space, Textarea, TextInput } from "@mantine/core";
import { useFormState } from "react-dom";
import { User } from "@/__generated__/graphql";
import { updateUserAction } from "@/utils/user-actions/update-user-action";

type UpdateUserType = {
  close: () => void;
  userData: Pick<User, 'name' | 'email'>;
};

const UpdateUserForm: React.FC<UpdateUserType> = ({ close, userData }) => {
  const formRef = React.useRef<ElementRef<"form">>(null);
  const [state, formAction] = useFormState(updateUserAction, { isValid: false });
  const [name, setName] = useState(userData.name ?? "")
  const [email, setEmail] = useState(userData.email ?? "")

  useEffect(() => {
    if (state.isValid) {
      formRef.current?.reset();
      close();
    }
  }, [state.isValid, close]);

  return (
    <form action={formAction} ref={formRef}>
      <TextInput label="Name" placeholder='e.g jane' name='name' onChange={(e => setName(e.target.value))} value={name} />
      <Space h={20} />

      <TextInput label="Name" placeholder='e.g jane@example.com' name='email' onChange={(e => setEmail(e.target.value))} value={email} />
      <Space h={20} />

      <Group justify='end'>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  )
};

export default UpdateUserForm;
