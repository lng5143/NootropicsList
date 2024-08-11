import VENDORS_SEED from "@/seedData/vendor-seed";
import Vendor from "@/app/components/vendor/vendor";

export default function VendorsPage() {
    return (
        <>
            <div>
                {VENDORS_SEED.map(item => (
                    <Vendor key={item.id}
                        name={item.name} url={item.url} logo={item.logo} description={item.description}
                    />
                ))}
            </div>
            <div>Filter Div</div>
        </>
    )
}