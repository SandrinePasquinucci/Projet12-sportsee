import { UserInfos } from "../class/mock";

export function getUserInfos(id) {
  const { data } = `http://localhost:3000/data/mockdata.json`;

  const user = new UserInfos(data);
  return { data: user };
}
