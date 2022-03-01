import React from "react";
import ReactDOM from "react-dom";

import WebPage from "./WebPage";
import MaintenancePage from "./maintenance/maintenance.js";
import NotFoundPage from "./notfound/index.js";
import HomePage from "./main/index.js";
import HomePage2019 from "./2019/index.js";
import NUSBiathlon from "./main/nusbiathlon/index.js";
import RunNUS from "./main/runnus/index.js";
import SunNUS from "./main/sunnus/index.js";
import InterFacultyGames from "./main/ifg/index.js";

import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

test("Render Home Page on /", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(HomePage)).toHaveLength(1);
});

test("Render Home Page 2019 on /2019/mc", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/2019/mc"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(HomePage2019)).toHaveLength(1);
});

test("Render NUS Biathlon on /nusbiathlon", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/nusbiathlon"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(NUSBiathlon)).toHaveLength(1);
});

test("Render RunNUS on /runnus", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/runnus"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(RunNUS)).toHaveLength(1);
});

test("Render SunNUS on /sunnus", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/sunnus"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(SunNUS)).toHaveLength(1);
});

test("Render Inter-Facutly Games on /ifg", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/ifg"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(InterFacultyGames)).toHaveLength(1);
});

test("Render Error Page on /random", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/random"]}>
      <WebPage />
    </MemoryRouter>
  );

  expect(component.find(NotFoundPage)).toHaveLength(1);
});
