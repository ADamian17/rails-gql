"use client"
import React from "react";

import { Button, Drawer, Group, Space, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import UpdateUserForm from "../UpdateUserForm";
import { User } from "@/__generated__/graphql";

type UpdateUserType = {
  userData: Pick<User, 'name' | 'email'>;
};

const UpdateUser: React.FC<UpdateUserType> = ({ userData }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="space-between" align="center">
        <Title order={3}>User Settings</Title>
        <Button onClick={open} variant="transparent">Edit</Button>

        <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Update User" position="right">
          <UpdateUserForm close={close} userData={userData} />
        </Drawer>
      </Group>
      <Space h={10} />
    </>
  )
};

export default UpdateUser;