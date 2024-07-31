"use client"
import React from "react";

import { Button, Drawer, Group, Space, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type UpdateUserType = {};

const UpdateUser: React.FC<UpdateUserType> = (props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="space-between" align="center">
        <Title order={3}>User Settings</Title>
        <Button onClick={open} variant="transparent">Edit</Button>

        <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Update User" position="right">
          {/* Drawer content */}
        </Drawer>
      </Group>
      <Space h={10} />
    </>
  )
};

export default UpdateUser;