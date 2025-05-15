import type {Route} from "./+types/home";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className={'p-10'}>
    <Link to={'/'} className={'mb-10 inline-block'}><u>Back to table</u></Link>
  </div>;
}
