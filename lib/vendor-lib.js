import VENDORS from "@/data/vendors";

export function getVendorsByNootropics(id) {
    if (id === 0)
        return VENDORS;
    else
        return VENDORS.filter(o => o.nootropics.includes(id))
}