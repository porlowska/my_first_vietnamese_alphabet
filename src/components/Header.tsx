import { useState } from "react";
import { Link } from "react-router-dom";
import { alphabet } from "../data/alphabet";
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon,XMarkIcon, ChevronDownIcon} from "@heroicons/react/24/outline";



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const letters = Object.keys(alphabet);

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h1 className="font-serif font-semibold text-3xl text-gray-50">
              My First Vietnamese Alphabet{" "}
              <span className="font-extralight text-xs">for Adults</span>
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <Popover className="relative hidden lg:flex">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-200">
            <span>Choose a letter</span>
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
          </PopoverButton>
          <PopoverPanel className="absolute  z-10 mt-2 w-screen max-w-md -translate-x-1/2 px-4 sm:px-0">
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg text-sm">
              <div className="grid grid-cols-2 gap-2 p-4 lg:grid-cols-3">
                {letters.map((item) => (
                  <Link
                    key={item}
                    to={`/letter/${item}`}
                    className="block rounded-lg p-3 font-semibold text-gray-900 hover:bg-gray-50 relative"
                  >
                    {item}
                    <span className="absolute inset-0" />
                  </Link>
                ))}
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <h1 className="font-serif font-semibold text-3xl text-gray-50">
                My First Vietnamese Alphabet{" "}
                <span className="font-extralight text-xs">for Adults</span>
              </h1>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">
                  <h2 className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    Choose a letter
                  </h2>
                  
                  <div className="mt-2 space-y-2 grid grid-cols-3 gap-2 ">
                    {letters.map((item) => (
                      <Link
                        key={item}
                        to={`/letter/${item}`}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
