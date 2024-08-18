'use client';

import Vendor from "@/components/vendor/vendor";
import CategoryItem from "@/components/category/category-item";
import CATEGORIES from "@/data/categories";
import {useRef, useState} from "react";
import {getVendors} from "@/lib/vendor-lib";
import VendorModal from "@/components/vendor/vendor-modal";

export default function MainData() {
    const [activeId, setActiveId] = useState(0);
    const [isInit, setIsInit] = useState(true);
    const [currentVendorId, setCurrentVendorId] = useState(null);
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

    const vendors = getVendors(activeId);

    return (
        <div>
            <VendorModal ref={dialog} id={currentVendorId} onClose={handleCloseModal} isOpen={currentVendorId !== null}/>
            <div className="flex flex-col-reverse lg:flex-row mb-20 w-full">
                <div className="mr-5 w-full lg:w-5/6">
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
                </div>
                <div className="w-full max-w-full lg:w-1/6 mb-3">
                    <ul className="flex overflow-x-scroll flex-row lg:flex-col ">
                        <li key={0}><CategoryItem name="All" isActive={isInit || activeId === 0}
                                          handleClick={() => handleSetActiveId(0)}/></li>
                        {CATEGORIES.map(item => (
                            <li key={item.id}>
                                <CategoryItem
                                    name={item.name}
                                    isActive={activeId === item.id}
                                    handleClick={() => handleSetActiveId(item.id)}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}