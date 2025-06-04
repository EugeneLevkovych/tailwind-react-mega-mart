import { CATEGORY_GROCERIES,
  CATEGORY_PREMIUM_GRUITS,
  CATEGORY_HOME_AND_KITCHEN,
  CATEGORY_FASHION,
  CATEGORY_ELECTRONICS,
  CATEGORY_BEAUTY,
  CATEGORY_HOME_IMPROVEMENT,
  CATEGORY_SPORTS, 
  CATEGORY_TOYS_AND_LUGGAGE } from "../data";

import Select from "./Select.jsx";

export default function ProductsBar() {

  return (
    <div className="border-y border-solid border-gray3">
        <div className="container flex gap-3.5 overflow-x-auto py-4 mx-auto px-4">
          <Select title="Groceries" options={CATEGORY_GROCERIES} />
          <Select title="Premium Fruits" options={CATEGORY_PREMIUM_GRUITS} />
          <Select title="Home & Kitchen" options={CATEGORY_HOME_AND_KITCHEN} />
          <Select title="Fashion" options={CATEGORY_FASHION} />
          <Select title="Electronics" options={CATEGORY_ELECTRONICS} />
          <Select title="Beauty" options={CATEGORY_BEAUTY} />
          <Select title="Home Improvement" options={CATEGORY_HOME_IMPROVEMENT} />
          <Select title="Sports" options={CATEGORY_SPORTS} />
          <Select title="Toys & Luggage" options={CATEGORY_TOYS_AND_LUGGAGE} />
        </div>
    </div>
  ) }