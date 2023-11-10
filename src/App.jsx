import { useState } from "react";
import "./App.css";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";
import PageHeader from "./layouts/PageHeader";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <>
      <div className="max-h-screen flex flex-col dark h-screen">
        <div className="text-3xl">
          <PageHeader />
        </div>
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <div>Sidebar</div>
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 pb-4 z-10">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
