import { calculateTotalTime, convertTime } from './TimerPlayerUtils';

it("calcuates the total seconds from the times and intervals", () => {
  expect(calculateTotalTime(35, 15, 8)).toEqual(400);
  expect(calculateTotalTime(5, 5, 10)).toEqual(100);
});

it("converts the time from seconds to MM:SS", () => {
  expect(convertTime(400)).toEqual("6:40");
  expect(convertTime(100)).toEqual("1:40");
  expect(convertTime(800)).toEqual("13:20");
});
