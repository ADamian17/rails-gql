"use client";
import React, { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, Group, Space, Textarea, TextInput } from "@mantine/core";
import { createLinkAction } from "@/utils/link-actions/create-link-action";
import { useFormState } from "react-dom";

const CreateLinkForm: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [state, formAction] = useFormState(createLinkAction, { isValid: false });

  useEffect(() => {
    if (state.isValid) {
      close();
    }
  }, [state.isValid, close]);

  return (
    <>
      <Group justify="end">
        <Button onClick={open}>Create New Link</Button>
      </Group>

      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication" position="right">
        <form action={formAction}>
          <TextInput label="Url Link" placeholder='e.g https://google.com' name='url' />
          <Space h={20} />

          <Textarea
            label="Url description"
            placeholder="e.g This is a link to google"
            name='description'
          />
          <Space h={20} />

          <Group justify='end'>
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Drawer>
    </>
  )
};

export default CreateLinkForm;