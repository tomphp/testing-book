import {test, expect} from 'vitest';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/svelte";
import MainMenu from "./MainMenu.svelte";

const testItems = [
  {title: "No Link or Children"},
  {title: "Link Without Children", link: "/foo"},
  {title: "Link WithChildren", link: "/bar", children: [
    { link: "/bar/1", title: "Child 1"},
    { link: "/bar/2", title: "Child 2"}
  ]},
];

test("MainMenu snapshot", () => {
  const {container} = render(MainMenu, {props: {items: testItems}});
  expect(container).toMatchSnapshot();
});
