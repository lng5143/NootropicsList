import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import VENDORS from "@/data/vendors";
import TickItem from "@/components/vendor/tick-item";
import { createPortal } from "react-dom";

function VendorModal({id, onClose}) {
    const dialog = useRef();
    const modalMain = useRef();

    const vendorData = VENDORS.find(o => o.id === id);

    useEffect(() => {
        const handleClick = (e) => {
            if (!modalMain.current.contains(e.target)) {
                onClose();
            }
        }

        dialog.current.showModal();

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

        
    }, [onClose]);

    return createPortal(
        <>
            <div className="fixed top-0 left-0 z-40 h-full w-full bg-black bg-opacity-20 backdrop-blur-sm" onClick={onClose}></div>
            <motion.dialog
                ref={dialog}
                className="z-50 w-3/4 md:w-1/2 rounded-md bg-white p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {vendorData && <div ref={modalMain}>
                        <div className="mb-8 w-full items-center">
                            <h1 className="mb-5 w-full text-4xl md:text-5xl">{vendorData.name}</h1>
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
            </motion.dialog>
        </>
    , document.getElementById('modal-root'))
}

export default VendorModal;