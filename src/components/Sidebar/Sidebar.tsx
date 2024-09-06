import Menu from "../Menu";
import { StepBack, StepForward } from "lucide-react";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../../store/store";
import { m } from "framer-motion";
import cn from "clsx";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <m.aside
      className={cn(
        "bg-orange-200 w-48 min-h-40 m-1 p-2 rounded-lg mt-4 ml-2 relative whitespace-nowrap overflow-hidden",
        { "p-2 first:pt-10": isCollapsed }
      )}
      animate={{ width: isCollapsed ? 48 : 180 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <button onClick={toggleSidebar} className="absolute top-0 right-0 p-3">
        {isCollapsed ? <StepForward /> : <StepBack />}
      </button>
      <Menu />
    </m.aside>
  );
}

export default Sidebar;
