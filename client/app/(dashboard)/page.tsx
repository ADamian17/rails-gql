import React from 'react'
import dynamic from 'next/dynamic';
import { AllLinksDocument } from '@/__generated__/graphql';
import { executeApiReq } from '@/graphql/utils';
import { Table, TableTr, TableScrollContainer, TableThead, TableTh, TableTbody, Container, Space } from '@mantine/core';
import consumer from '@/lib/cable';

const CreateLinkForm = dynamic(() => import('@/components/CreateLinkForm'));
const LinkRow = dynamic(() => import('@/components/LinkRow'));

const DashboardPage = async () => {
  const data = await executeApiReq(AllLinksDocument);
  const rows = data.links.map((item) => (<LinkRow key={item.id} item={item} />));

  return (
    <Container pt={80} flex={10}>
      <CreateLinkForm />
      <Space h={80} />

      <TableScrollContainer minWidth={800}>
        <Table verticalSpacing="sm" highlightOnHover>
          <TableThead>
            <TableTr>
              <TableTh>Url</TableTh>
              <TableTh>Posted By</TableTh>
              <TableTh>Description</TableTh>
              <TableTh />
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </Table>
      </TableScrollContainer>
    </Container>
  );
}

export default DashboardPage
