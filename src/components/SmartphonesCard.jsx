export default function SmartphonesCard({smartphoneObj}) {
    const price = Number(smartphoneObj.price.replace('$', ''));
    const prevPrice = Number(smartphoneObj.prevPrice.replace('$', ''));
  return (
    <li className="max-w-[14.3rem] w-full h-[18.5rem] border-[1px] border-solid border-gray3 rounded-2xl overflow-hidden">
        <div className="flex justify-center h-[11.8rem] bg-gray1">
          <img className="h-[11.8rem] w-[8.8rem] object-scale-down" src={smartphoneObj.photoName} />
        </div>
        <div className="p-3 text-gray4">
           <p className="font-semibold leading-[1.2] mb-2.5">{smartphoneObj.name}</p>
           <div className="flex gap-2.5 border-b-1 border-gray3 mb-2.5">
           <p>{smartphoneObj.price}</p>
           <p>{smartphoneObj.prevPrice}</p>
           </div>
        <p className="text-green1">Save - $ {prevPrice - price}</p>
        </div>
    </li>
  )}