import { UseFetch } from "../utils/fetch.js";
import { UserInfos } from "./userInfos.js";
import { ActivityInfo } from "./activityInfos.js";
import { AverageSessions } from "./averageSessions.js";
import { PerformancesInfos } from "./performancesInfos.js";

export function getUserInfos(Mock, ID) {
  const { data, isLoading, isError } = UseFetch(
    Mock
      ? `http://localhost:3001/datas/user.json`
      : `http://localhost:3000/user/${ID}`
  );
  const user = new UserInfos(data);
  return { data: user, isLoading, isError };
}

export function getActivityInfos(Mock, ID) {
  const { data, isLoading, isError } = UseFetch(
    Mock
      ? "http://localhost:3001/datas/activity.json"
      : `http://localhost:3000/user/${ID}/activity`
  );
  const activity = new ActivityInfo(data);
  return { data: activity, isLoading, isError };
}

export function getAverageSessions(Mock, ID) {
  const { data, isLoading, isError } = UseFetch(
    Mock
      ? `http://localhost:3001/datas/average.json`
      : `http://localhost:3000/user/${ID}/average-sessions`
  );
  const average = new AverageSessions(data);
  return { data: average, isLoading, isError };
}

export function getPerformances(Mock, ID) {
  const { data, isLoading, isError } = UseFetch(
    Mock
      ? `http://localhost:3001/datas/performance.json`
      : `http://localhost:3000/user/${ID}/performance`
  );
  const perfomances = new PerformancesInfos(data);
  return { data: perfomances, isLoading, isError };
}
