import VENDORS from "@/data/vendors";

export function getVendors(id) {
    if (id === 0)
        return VENDORS;
    else
        return VENDORS.filter(o => o.categories.includes(id))
}