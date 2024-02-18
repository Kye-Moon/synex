import {Bars3Icon} from "@heroicons/react/24/outline";

interface StickyTopMobileSideBarProps {
  setOpen: (open: boolean) => void
}

const StickyTopMobileSideBar = ({setOpen}:StickyTopMobileSideBarProps) => {
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
      <a href="#">
        <span className="sr-only">Your profile</span>
      </a>
    </div>
  )
}

export default StickyTopMobileSideBar
