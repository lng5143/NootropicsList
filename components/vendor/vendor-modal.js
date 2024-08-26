import {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import VENDORS from "@/data/vendors";
import CATEGORIES from "@/data/categories";
import Link from "next/link";
import CategoryTag from "@/components/category/category-tag";
import TickItem from "@/components/vendor/tick-item";

const VendorModal = forwardRef(function VendorModal({id, onClose, isOpen}, ref) {
    const dialog = useRef();
    const modal = useRef();

    const vendorData = VENDORS.find(o => o.id === id);

    useEffect(() => {
        const handleClick = (event) => {
            if (isOpen && !modal.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [onClose]);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        }
    });

    return (
        <>
            <dialog className="w-10/12 rounded-md border-4 border-blue-800 p-10 lg:w-1/2" ref={dialog}>
                {vendorData && <div ref={modal}>
                        <div className="mb-8 w-full items-center md:flex">
                            <h1 className="mb-3 w-full flex-grow text-4xl md:text-5xl">{vendorData.name}</h1>
                                <a className="rounded-md bg-blue-800 px-4 py-2 text-center text-lg text-slate-200"
                                   href={vendorData.url} target="_blank" rel="noopener noreferrer">
                                    Go to website
                                </a>
                        </div>
                        <div className="mb-3 md:flex">
                            <div className="basis-1/2">
                                <TickItem isActive={vendorData.isHaveReport} content="Certified lab report" />
                            </div>
                            <div className="basis-1/2">
                                <TickItem isActive={vendorData.isShipInternational} content="International shipping" />
                            </div>
                        </div>
                        <div>
                            <p>Ship from: {vendorData.shipFrom.join(', ')}</p>
                        </div>
                </div>}
            </dialog>
        </>
    )
})

export default VendorModal;