import {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import VENDORS from "@/data/vendors";
import CATEGORIES from "@/data/categories";
import Link from "next/link";
import CategoryTag from "@/components/category/category-tag";

const VendorModal = forwardRef(function VendorModal({id, onClose, isOpen}, ref) {
    const dialog = useRef();
    const modal = useRef();

    const vendorData = VENDORS.find(o => o.id === id);
    const categoryData = vendorData ? CATEGORIES
                                .filter(o => vendorData.categories.includes(o.id))
                                .map(o => ({ name: o.name, color: o.color })) : undefined;

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
                        <div className="flex items-center mb-3">
                            <h1 className="text-5xl flex-grow">{vendorData.name}</h1>
                            <Link className="text-slate-200 bg-blue-800 py-2 px-4 text-lg rounded-md text-center"
                                  href={vendorData.url}>Go to website</Link>
                        </div>
                        <div className="mb-3 flex items-center">
                            <svg className="mr-1" fill={vendorData.hasReport ? "#008000" : "#CBD5E1"} width="20px" height="20px" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/>
                            </svg>
                            <p className={vendorData.hasReport ? "" : "text-slate-300"}>Third-party report</p>
                        </div>
                        <div className="flex flex-wrap">
                            {categoryData && categoryData.map(item => (<CategoryTag data={item}/>))}
                        </div>
                    </div>
                    <p>{vendorData.description}</p>
                </div>}
            </dialog>
        </>
    )
})

export default VendorModal;