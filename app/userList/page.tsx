import { getUsersData } from "../actions/userActions";
import Users from "../users/page";

export default async function Home() {
  const data = await getUsersData();
  return <Users usersu={data} />;
}
