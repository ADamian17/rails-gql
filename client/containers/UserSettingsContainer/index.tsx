import React from "react";
import { format } from "date-fns";

import { Divider, Grid, GridCol, Paper, Text } from "@mantine/core";
import UpdateUser from "@/components/UpdateUser";
import { executeApiReq } from "@/graphql/utils";
import { CurrentUserDocument } from "@/__generated__/graphql";

const UserSettingsContainer: React.FC = async () => {
  const data = await executeApiReq(CurrentUserDocument);

  if (!data?.user?.id) return null;

  const { name, email, createdAt } = data.user;

  return (
    <Paper shadow="xs" withBorder p="xl">
      <UpdateUser userData={{ name, email }} />
      <Divider h={20} />

      <Grid>
        <GridCol>
          <Text>Name: {name}</Text>
        </GridCol>
        <GridCol>
          <Text>Email: {email}</Text>
        </GridCol>

        <GridCol>
          <Text>Member since: {format(createdAt, "MM/dd/yyyy")} </Text>
        </GridCol>
      </Grid>
    </Paper>
  )
};

export default UserSettingsContainer;
