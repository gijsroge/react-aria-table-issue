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
  {
    id: "2",
    name: "Galaxy S21",
    category: "Electronics",
    price: 699,
    brand: "Samsung",
    stock: 200,
  },
  { id: "3", name: "MacBook Pro", category: "Computers", price: 1299, brand: "Apple", stock: 80 },
  { id: "4", name: "Dell XPS 13", category: "Computers", price: 999, brand: "Dell", stock: 50 },
  {
    id: "5",
    name: "Sony WH-1000XM4",
    category: "Headphones",
    price: 349,
    brand: "Sony",
    stock: 120,
  },
  { id: "6", name: "AirPods Pro", category: "Headphones", price: 249, brand: "Apple", stock: 180 },
  {
    id: "7",
    name: "Fitbit Charge 5",
    category: "Wearables",
    price: 179,
    brand: "Fitbit",
    stock: 75,
  },
]
export default function Home() {
  return <div className={'p-10'}>
    <Link to={'/'} className={'mb-10 inline-block'}><u>Back to table</u></Link>
  </div>;
}
