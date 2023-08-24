import { UseFetch } from "../utils/fetch.js";
import { UserInfos } from "./userInfos.js";

export function getUserInfos(Mock, ID) {
  const { data, isLoading, isError } = UseFetch(
    Mock
      ? `http://localhost:3001/datas/user.json`
      : `http://localhost:3000/user/${ID}`
  );
  const user = new UserInfos(data);
  console.log(data);
  return { data: user, isLoading, isError };
}
