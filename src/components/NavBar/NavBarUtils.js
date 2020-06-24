import { path } from "../../constants";

export const showBackButton = (url) =>
  url === path.form || url === path.page;

export const chooseTitle = (url) => {
  switch (url) {
    case path.form:
      return "Add a new timer";
    case path.page:
      return "Use your timer";
    case path.list:
      return "Timers";
    default:
      return "Timers"
  }
}