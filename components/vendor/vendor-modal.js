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
            <dialog className="w-1/2 p-10 rounded-md" ref={dialog}>
                {vendorData && <div ref={modal}>
                    <div className="mb-8">
                        <div className="flex items-center mb-5">
                            <h1 className="text-5xl flex-grow">{vendorData.name}</h1>
                            <Link className="text-slate-200 bg-blue-800 py-2 px-4 text-lg rounded-md text-center"
                                  href={vendorData.url}>Go to website</Link>
                        </div>
                        <div className="flex mb-3">
                            <div className="basis-1/2">
                                <TickItem isActive={vendorData.isHaveReport} content="Third-party report" />
                            </div>
                            <div className="basis-1/2">
                                <TickItem isActive={vendorData.isShipInternational} content="International shipping" />
                            </div>
                        </div>
                        <div>
                            <p>Ship from: {vendorData.shipFrom.join(', ')}</p>
                        </div>
                    </div>
                    <p>{vendorData.description}</p>
                </div>}
            </dialog>
        </>
    )
})

export default VendorModal;