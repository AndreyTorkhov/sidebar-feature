import { isCollapsedAtom } from "../../store/store";
import { IMenuItem } from "./data/menu.data";
import { useAtomValue } from "jotai";
// import { Link } from "react-router-dom";

function MenuItem({ item }: { item: IMenuItem }) {
  const isCollapsed = useAtomValue(isCollapsedAtom);
  return (
    <a
      href={item.link}
      rel="noreferrer noopener"
      target="_blank"
      className="flex p-1 hover:outline-none hover:ring-2 hover:ring-zinc-950 rounded-md"
    >
      <item.icon />
      {!isCollapsed && <span className="ml-4">{item.name}</span>}
    </a>
  );
}

export default MenuItem;
