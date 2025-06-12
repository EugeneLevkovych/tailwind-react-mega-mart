export default function TopCategoriesCard({ topCategoriesObj }) {
  return (
    <li className="w-33 h-43 border-none hover:border hover:border-solid hover:border-blue4 hover:shadow-lg overflow-hidden cursor-pointer">
      <div className="size-33 flex justify-center items-center bg-gray1 rounded-full mb-5">
        <img src={topCategoriesObj.photoName} />
      </div>
      <p className="font-medium leading-[1.25] text-center text-gray4 mb-1">
        {topCategoriesObj.name}
      </p>
    </li>
  );
}
