import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import TimerPlayer from "./TimerPlayer";
import { calculateTotalTime, convertTime } from "./TimerPlayerUtils";

const history = createMemoryHistory();

const defaultTimer = {
  timerName: "Long default",
  activeTime: 10,
  restTime: 5,
  intervals: 10
};

it("renders initial state of timer player", () => {
  render(
    <Router history={history}>
      <TimerPlayer timer={defaultTimer} deleteTimer={() => { }} />
    </Router>
  );
  expect(screen.getByText("Active")).toBeInTheDocument();
});

it("calcuates the total seconds from the times and intervals", () => {
  expect(calculateTotalTime(35, 15, 8)).toEqual(400);
  expect(calculateTotalTime(5, 5, 10)).toEqual(100);
});

it("converts the time from seconds to MM:SS", () => {
  expect(convertTime(400)).toEqual("6:40");
  expect(convertTime(100)).toEqual("1:40");
  expect(convertTime(800)).toEqual("13:20");
});
