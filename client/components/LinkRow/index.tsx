import React from "react";

import { ActionIcon, Button, Group, rem, TableTd, TableTr, Text } from "@mantine/core";
import { deleteLinkAction } from "@/utils/link-actions/destroy-link-action";
import { IconTrash } from "@tabler/icons-react";
import { AllLinksQuery } from "@/__generated__/graphql";

type LinkRowType = {
  item: AllLinksQuery["allLinks"][number];
};

const LinkRow: React.FC<LinkRowType> = ({ item }) => {
  return (
    <TableTr key={item.id}>
      <TableTd>
        <Group gap="sm">
          <Text fz="sm" fw={500} truncate>
            {item?.url}
          </Text>
        </Group>
      </TableTd>

      <TableTd>
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            {item?.postedBy?.name}
          </Text>
        </Group>
      </TableTd>

      <TableTd>
        <Group gap="sm">
          <Text fz="sm" fw={500} truncate lineClamp={1}>
            {item?.description}
          </Text>
        </Group>
      </TableTd>

      <TableTd>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="red">
            <form action={deleteLinkAction}>
              <input type="hidden" name="linkId" value={item.id} />
              <Button type="submit" variant='transparent' color='red'>
                <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              </Button>
            </form>
          </ActionIcon>
        </Group>
      </TableTd>
    </TableTr>
  )
};

export default LinkRow;