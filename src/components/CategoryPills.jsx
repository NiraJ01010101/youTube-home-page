import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "./Button";
import { useState } from "react";

function CategoryPills({ categories, selectedCategory, onSelect }) {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden relative">
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
          {categories &&
            categories.map((category) => (
              <Button
                key={category}
                onClick={() => onSelect(category)}
                variant={selectedCategory === category ? "active" : "default"}
                className="py-1 px-3 rounded-lg whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
        </div>
        {isRightVisible && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
            <Button
              variant="ghost"
              size="icon"
              className="h-full aspect-square w-auto p-1.5"
            >
              <IoIosArrowBack />
            </Button>
          </div>
        )}

        {isLeftVisible && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="h-full aspect-square w-auto p-1.5"
            >
              <IoIosArrowForward />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryPills;
