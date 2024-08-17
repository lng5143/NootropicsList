import FaqItem from "@/components/main/faq-item";
import FAQs from "@/data/faqs";

export default function Faq() {
    return (
        <div className="w-10/12">
            <div className="text-center mb-10">
                <h1 className="text-4xl p-2">FAQs</h1>
                <p className="">Questions about nootropics.</p>
            </div>
            <ul className="">
                {FAQs.map(item => (
                    <li key={item.id}>
                        <FaqItem item={item}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}