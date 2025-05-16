import type { Route } from "./+types/home";
import { Menu } from "@/components/ui/menu"
import { Table } from "@/components/ui/table"
import { IconDotsVertical } from "@intentui/icons"
import { NumberFormatter } from "@internationalized/number"
import {TextField} from "~/components/ui/text-field";
import {Link} from "react-router";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export const products = [
  { id: "1", name: "iPhone 13", category: "Electronics", price: 799, brand: "Apple", stock: 150 },
]
export default function Home() {
  return <div className={'p-10'}>
    <Table selectionMode="multiple" aria-label="Products">
      <Table.Header>
        <Table.Column className="w-0">#</Table.Column>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Category</Table.Column>
        <Table.Column>Price</Table.Column>
        <Table.Column>Stock</Table.Column>
        <Table.Column />
      </Table.Header>
      <Table.Body items={products}>
        {(item) => (
            <Table.Row id={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name} <TextField /></Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>

                {new NumberFormatter("en-US", { style: "currency", currency: "USD" }).format(
                    item.price,
                )}
              </Table.Cell>
              <Table.Cell>{item.stock}</Table.Cell>
              <Table.Cell>
                <div className="flex justify-end">
                  <Menu>
                    <Menu.Trigger className="size-6">
                      <IconDotsVertical />
                    </Menu.Trigger>
                    <Menu.Content aria-label="Actions" placement="left top">
                      <Menu.Item>View</Menu.Item>
                      <Menu.Item>Edit</Menu.Item>
                      <Menu.Separator />
                      <Menu.Item isDanger>Delete</Menu.Item>
                    </Menu.Content>
                  </Menu>
                </div>
              </Table.Cell>
            </Table.Row>
        )}
      </Table.Body>
    </Table>


    <Table selectionMode="multiple" aria-label="Products">
      <Table.Header>
        <Table.Column className="w-0">#</Table.Column>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Category</Table.Column>
        <Table.Column>Price</Table.Column>
        <Table.Column>Stock</Table.Column>
        <Table.Column />
      </Table.Header>
      <Table.Body items={products}>
        {(item) => (
            <Table.Row id={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name} <TextField /><button className={'focus:ring-2'} onClick={() => alert('hoi')}>native button</button></Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>

                {new NumberFormatter("en-US", { style: "currency", currency: "USD" }).format(
                    item.price,
                )}
              </Table.Cell>
              <Table.Cell>{item.stock}</Table.Cell>
              <Table.Cell>
                <div className="flex justify-end">
                  <Menu>
                    <Menu.Trigger className="size-6">
                      <IconDotsVertical />
                    </Menu.Trigger>
                    <Menu.Content aria-label="Actions" placement="left top">
                      <Menu.Item>View</Menu.Item>
                      <Menu.Item>Edit</Menu.Item>
                      <Menu.Separator />
                      <Menu.Item isDanger>Delete</Menu.Item>
                    </Menu.Content>
                  </Menu>
                </div>
              </Table.Cell>
            </Table.Row>
        )}
      </Table.Body>
    </Table>

  </div>;
}
