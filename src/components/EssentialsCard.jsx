export default function EssentialCard({ essentialsObj }) {
  return (
    <li className="w-46.5 h-auto border-none cursor-pointer">
      <div className="size-46.5 flex justify-center items-center bg-gray1 rounded-2xl hover:border hover:border-blue4 hover:shadow-lg mb-5">
        <img src={essentialsObj.photoName} />
      </div>
      <p className="font-semibold leading-[1.25] text-center text-gray2 mb-1">
        {essentialsObj.name}
      </p>
      <p className="font-bold text-xl leading-none text-center text-gray4">
        {essentialsObj.discont}
      </p>
    </li>
  );
}
