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
        <>
            <VendorModal ref={dialog} id={currentVendorId} onClose={handleCloseModal} isOpen={currentVendorId !== null}/>
            <div className="flex mb-20 w-full">
                <div className="mr-5 w-5/6">
                    <ul className="grid grid-cols-4">
                    {vendors.map(item => (
                        <li>
                            <Vendor key={item.id}
                                    name={item.name} logo={item.logo}
                                    handleClick={() => handleOpenModal(item.id)}
                            />
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="w-1/6">
                    <ul>
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
        </>
    )
}