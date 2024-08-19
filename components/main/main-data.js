'use client';

import Vendor from "@/components/vendor/vendor";
import CATEGORIES from "@/data/categories";
import {useRef, useState} from "react";
import {getVendors, getVendorsByNootropics} from "@/lib/vendor-lib";
import VendorModal from "@/components/vendor/vendor-modal";
import NootropicNavItem from "@/components/nootropic/nootropic-nav-item";
import NOOTROPICS from "@/data/nootropics";

export default function MainData() {
    const [activeId, setActiveId] = useState(0);
    const [isInit, setIsInit] = useState(true);
    const [currentVendorId, setCurrentVendorId] = useState(null);
    const [currentNootropics, setCurrentNootropics] = useState(NOOTROPICS);
    const dialog = useRef();

    function handleSetActiveId(id) {
        setActiveId(id);
        setIsInit(false);
    }

    function handleOpenModal(id) {
        setCurrentVendorId(id);
        dialog.current.open();
    }

    function handleCloseModal() {
        setCurrentVendorId(null)
        dialog.current.close();
    }

    function handleSearchNootropics(event) {
        let nootropics;
        const searchValue = event.target.value;

        if (!searchValue || searchValue === "") {
            nootropics = NOOTROPICS;
        } else {
            nootropics = NOOTROPICS.filter(item => {
                if (item.name.toLowerCase().split(" ").some(o => o.startsWith(event.target.value)))
                    return item;
            });
        }
        setCurrentNootropics(nootropics);
    }

    function handleSubmitNootropics(event) {
        event.preventDefault();
    }

    const vendors = getVendorsByNootropics(activeId);

    return (
        <>
            <VendorModal ref={dialog} id={currentVendorId} onClose={handleCloseModal} isOpen={currentVendorId !== null}/>
            <div className="w-full flex flex-col-reverse lg:flex-row mb-20 ">
                <div className="mr-5 w-full lg:w-5/6">
                    {vendors.length === 0 &&
                        <p className="text-2xl text-slate-800 mt-5 text-center w-full">There is no vendor available for this nootropic...</p>}
                    {vendors.length >0 &&
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {vendors.map(item => (
                                <li key={item.id}>
                                    <Vendor
                                        name={item.name} logo={item.logo}
                                        handleClick={() => handleOpenModal(item.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className="w-full lg:w-1/6 mb-3">
                    <form className="w-full h-10 mb-2" onSubmit={handleSubmitNootropics}>
                        <input className="w-full h-full border-2 border-slate-300 p-2 rounded-md" type="text"
                               onChange={handleSearchNootropics}
                               placeholder="Search Nootropics..." />
                    </form>
                    <ul className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden gap-2">
                        <li key={0}><NootropicNavItem name="All" isActive={isInit || activeId === 0}
                                                  handleClick={() => handleSetActiveId(0)}/></li>
                        {currentNootropics.map(item => (
                            <li key={item.id}>
                                <NootropicNavItem
                                    name={item.name}
                                    isActive={activeId === item.id}
                                    handleClick={() => handleSetActiveId(item.id)}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}