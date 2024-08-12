import CATEGORIES from "@/data/categories";
import Vendor from "@/components/vendor/vendor";
import CategoryItem from "@/components/category/category-item";
import VENDORS from "@/data/vendors";

export default function Home() {
  return (
      <>
          <header>
              <h1>CURATED NOOTROPICS VENDORS</h1>
              <p>Description...</p>
          </header>
          <main className="flex">
              <div className="">
                  {VENDORS.map(item => (
                      <Vendor key={item.id}
                              name={item.name} logo={item.logo}
                      />
                  ))}
              </div>
              <div>
                  <ul>
                      {CATEGORIES.map(item => (
                          <li><CategoryItem key={item.id} name={item.name} /></li>
                      ))}
                  </ul>
              </div>
          </main>
      </>
  );
}
