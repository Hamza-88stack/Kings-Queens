import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("drycleaning");

  const categories = [
    { id: "drycleaning", label: "Dry Cleaning" },
    { id: "laundry", label: "Laundry" },
    { id: "shirts", label: "Shirts" },
    { id: "household", label: "Household" },
    { id: "alterations", label: "Alterations" },
  ];

  const pricingData: Record<string, Array<{ item: string; price: string }>> = {
    drycleaning: [
      { item: "Suit (2 Piece)", price: "£14.50" },
      { item: "Suit (3 Piece)", price: "£19.50" },
      { item: "Trousers", price: "£7.50" },
      { item: "Jacket / Blazer", price: "£8.50" },
      { item: "Coat (Short)", price: "£12.00" },
      { item: "Coat (Long)", price: "£15.00" },
      { item: "Dress (Standard)", price: "£12.50" },
      { item: "Dress (Delicate/Silk)", price: "£18.00" },
      { item: "Skirt", price: "£7.50" },
      { item: "Blouse / Top", price: "£7.00" },
      { item: "Tie", price: "£4.50" },
      { item: "Scarf", price: "£6.00" },
    ],
    laundry: [
      { item: "Wash & Fold (per kg)", price: "£4.50" },
      { item: "Bed Set (Single)", price: "£15.00" },
      { item: "Bed Set (Double)", price: "£18.00" },
      { item: "Bed Set (King)", price: "£22.00" },
      { item: "Towel (Bath)", price: "£3.00" },
      { item: "Towel (Hand)", price: "£2.00" },
    ],
    shirts: [
      { item: "Shirt (Hung)", price: "£3.50" },
      { item: "Shirt (Folded)", price: "£4.00" },
      { item: "Shirt (Press Only)", price: "£2.50" },
      { item: "Blouse (Standard)", price: "£5.50" },
      { item: "Polo Shirt", price: "£4.00" },
    ],
    household: [
      { item: "Duvet (Single - Poly)", price: "£18.00" },
      { item: "Duvet (Double - Poly)", price: "£22.00" },
      { item: "Duvet (King - Poly)", price: "£26.00" },
      { item: "Duvet (Feather +£5)", price: "+£5.00" },
      { item: "Pillow", price: "£10.00" },
      { item: "Blanket / Throw", price: "£15.00" },
      { item: "Curtains (per kg)", price: "£12.00" },
    ],
    alterations: [
      { item: "Trouser Hemming", price: "£12.00" },
      { item: "Waist Adjustment", price: "£15.00" },
      { item: "Zip Replacement (Trousers)", price: "£15.00" },
      { item: "Zip Replacement (Jacket)", price: "from £25.00" },
      { item: "Sleeve Shortening", price: "£18.00" },
      { item: "Button Replacement", price: "£3.00" },
      { item: "Patch Repair", price: "from £8.00" },
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Price List</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Transparent pricing for our royal services. Minimum order for collection and delivery is £25.00.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                "px-6 py-3 uppercase tracking-widest text-xs font-bold border transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-amber-500 border-amber-500 text-neutral-950"
                  : "bg-transparent border-neutral-800 text-neutral-400 hover:border-amber-500 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Price Table */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 relative">
             {/* Decorative Corner */}
             <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-500/20" />
             <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-500/20" />

            <h3 className="text-2xl font-serif text-white mb-8 border-b border-neutral-800 pb-4">
              {categories.find(c => c.id === activeCategory)?.label}
            </h3>

            <div className="grid grid-cols-1 gap-y-6">
              {pricingData[activeCategory].map((item, idx) => (
                <div key={idx} className="flex justify-between items-end group">
                  <div className="flex-grow pr-4 relative">
                     <span className="bg-neutral-900 relative z-10 pr-2 text-neutral-300 group-hover:text-amber-500 transition-colors">
                       {item.item}
                     </span>
                     {/* Dotted Leader */}
                     <div className="absolute bottom-1 left-0 w-full border-b border-dotted border-neutral-700 -z-0" />
                  </div>
                  <div className="text-white font-bold shrink-0 bg-neutral-900 pl-2 z-10">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-500 text-xs italic">
               <p>* Prices are subject to change. Extra charges may apply for delicate fabrics, beading, or heavy soiling.</p>
               <p className="mt-2">* Children's items are charged at 70% of adult price.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
