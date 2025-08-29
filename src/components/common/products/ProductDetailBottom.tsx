"use client";

import { useState } from "react";
import Image from "next/image";
const tabs = ["Description", "Reviews", "Size Chart", "Shipping Policy"];

const ProductDetailBottom = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="section-container2 mx-4 md:mx-auto border border-gray-300 py-10 my-10">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`group relative px-5 py-2 text-lg font-medium transition-colors duration-300 ${
              activeTab === tab
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}

            <span
              className={`absolute left-0 bottom-0 h-[1px] bg-red-600 transition-all duration-500 ease-in-out  ${
                activeTab === tab ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="mt-6 text-md space-y-5">
        {activeTab === "Description" && (
          <>
          <Image src="/Images/product/image_des.png" alt="des" height={30} width={190}/>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
              <li>DO NOT BLEACH</li>
              <li>DO NOT TUMBLE DRY</li>
              <li>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
              <li>DO NOT DRY CLEAN</li>
            </ul>

            <h4 className="mt-6 text-lg">Sample Ordered List</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Comodus in tempor allamcorper miaculis</li>
              <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
              <li>Divamus sit amet purus justo.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
            </ol>

            <h4 className="mt-6 text-lg">Sample Paragraph</h4>
            <p>
              Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you&apos;re ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you&apos;re ready for summe!Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetailBottom;
