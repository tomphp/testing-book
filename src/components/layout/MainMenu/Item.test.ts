import {render} from "@testing-library/svelte";
import MainMenuItem from "./Item.svelte";

test("menu item with link", () => {
  const {container} = render(MainMenuItem, { props: { link: "/foo", title: "Foo" } });
  expect(container).toMatchSnapshot();
})

test("menu item without", () => {
  const {container} = render(MainMenuItem, { props: { title: "Foo" } });
  expect(container).toMatchSnapshot();
})
