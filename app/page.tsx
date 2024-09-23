import { getData } from "./actions/todoActions";
import Todos from "./todos/page";


export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}