import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function vulnerabilities(){
    return(
        <TableContainer>
        <Table variant='simple'>
          <TableCaption>Network Vulnerabilities</TableCaption>
          <Thead>
            <Tr>
              <Th backgroundColor={'cyan'}>System</Th>
              <Th backgroundColor={'cyan'}>Operating System</Th>
              <Th backgroundColor={'cyan'}>Device Type</Th>
              <Th backgroundColor={'cyan'}>Device Status</Th>
              <Th backgroundColor={'cyan'}>Status Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>N6123</Td>
              <Td>Windows 10</Td>
              <Td>PC</Td>
              <Td textColor={'green'} >Normal</Td>
              <Td textColor={'green'} >Secured and operational</Td>
            </Tr>
            <Tr>
              <Td>N6123</Td>
              <Td>Linux Server</Td>
              <Td>Server</Td>
              <Td textColor={'green'} >Normal</Td>
              <Td textColor={'green'} >Secured and operational</Td>
            </Tr>
            <Tr>
              <Td>N6123</Td>
              <Td>Windows 10</Td>
              <Td>PC</Td>
              <Td textColor={'red'} >Compromised</Td>
              <Td textColor={'red'} >Unauthorized ports open</Td>
            </Tr>
            <Tr>
              <Td>N6123</Td>
              <Td>Cisco IOS XE</Td>
              <Td>Router</Td>
              <Td textColor={'green'} >Normal</Td>
              <Td textColor={'green'} >Secured and operational</Td>
            </Tr>
            <Tr>
              <Td>N6123</Td>
              <Td>Ubuntu 20.04</Td>
              <Td>Router</Td>
              <Td textColor={'green'} >Normal</Td>
              <Td textColor={'green'} >Secured and operational</Td>
            </Tr>
            <Tr>
              <Td>N6123</Td>
              <Td>Cisco IOS</Td>
              <Td>Switch</Td>
              <Td textColor={'red'} >Compromised</Td>
              <Td textColor={'red'} >Unauthorized SPAN detected</Td>
            </Tr>
            <Tr>
              <Td>N6123</Td>
              <Td>macOS 10.14</Td>
              <Td>PC</Td>
              <Td textColor={'green'} >Normal</Td>
              <Td textColor={'green'} >Secured and operational</Td>
            </Tr>
          </Tbody>
          
        </Table>
      </TableContainer>
    );
}