export default function SmartphonesCard({smartphoneObj}) {
    const price = Number(smartphoneObj.price.replace('$', ''));
    const prevPrice = Number(smartphoneObj.prevPrice.replace('$', ''));

  return (
    <li className="relative w-[14.3rem] h-[18.5rem] border-[1px] border-solid border-gray3 rounded-2xl hover:border hover:border-solid hover:border-blue4 hover:shadow-xl overflow-hidden cursor-pointer">
        <div className="absolute top-0 right-0 flex items-center w-[3.18rem] h-[3.31rem] font-semibold text-sm text-white1 uppercase bg-main-blue rounded-bl-2xl pl-2.5">56% Off</div>
        <div className="flex justify-center h-[11.8rem] bg-gray1">
          <img className="h-[11.8rem] w-[8.8rem] object-scale-down" src={smartphoneObj.photoName} />
        </div>
        <div className="p-3 text-gray4">
          <p className="font-medium sm:font-semibold text-sm md:text-base leading-[1.2] mb-1 xl:mb-2.5">{smartphoneObj.name}</p>
          <div className="flex gap-2.5 border-b-1 border-gray3 mb-1 xl:mb-2.5">
            <p>{smartphoneObj.price}</p>
            <p>{smartphoneObj.prevPrice}</p>
          </div>
          <p className="font-medium sm:font-semibold text-green1 leading-[1.1]">Save - $ {prevPrice - price}</p>
        </div>
    </li>
  )}