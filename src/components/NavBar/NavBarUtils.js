import { path } from "../../constants";

const pathRegex = url => new RegExp(`${url}\\/?$`);
const pathWithIdRegex = url => new RegExp(`${url}\\/\\d+/?$`);

const timerPlayerPaths = pathWithIdRegex(path.list);
const timerListPaths = pathRegex(path.list);
const timerFormPaths = pathRegex(path.form);

export const showBackButton = (url) => 
  timerFormPaths.test(url) || timerPlayerPaths.test(url);

export const selectTitle = (url) => {
  if (timerPlayerPaths.test(url)) {
    return "Use your timer";
  } else if (timerFormPaths.test(url)) {
    return "Add a new timer";
  } else if (timerListPaths.test(url)) {
    return "Timers"
  } else {
    return "Circuit Timer";
  }
}
