import { path } from "../../constants";

const pathWithIdRegex = url => new RegExp(`${url}\\/\\d+/?$`);
const pages = pathWithIdRegex(path.list);

export const showBackButton = (url) => 
  url === path.form || pages.test(url);

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
