import { selectTitle, showBackButton } from './NavBarUtils';

const rootUrl = "/timers";

it("decides whether the back button should be shown", () => {
  expect(showBackButton(rootUrl)).toEqual(false);
  expect(showBackButton("/timers/0")).toEqual(true);
  expect(showBackButton("/timers/31")).toEqual(true);
  expect(showBackButton("/timers/new")).toEqual(true);
});

it("selects the correct title", () => {
  expect(selectTitle(rootUrl)).toEqual("Timers");
  expect(selectTitle(`${rootUrl}/0`)).toEqual("Use your timer");
  expect(selectTitle(`${rootUrl}/24`)).toEqual("Use your timer");
  expect(selectTitle(`${rootUrl}/new`)).toEqual("Add a new timer");
});

it("accepts a forward slash at the end of the url", () => {
  expect(showBackButton(`${rootUrl}/`)).toEqual(false);
  expect(selectTitle(`${rootUrl}/`)).toEqual("Timers");
});
