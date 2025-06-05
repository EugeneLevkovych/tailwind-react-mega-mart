export default function SmartphonesCard({smartphoneObj}) {
    const price = Number(smartphoneObj.price.replace('$', ''));
    const prevPrice = Number(smartphoneObj.prevPrice.replace('$', ''));
  return (
    <li className="max-w-[14.2rem] w-full h-[18.5rem] border-[1px] border-solid border-gray3 rounded-2xl">
        <div className="flex justify-center h-[11.8rem] bg-gray1">
          <img className="h-[11.8rem] w-[8.8rem] object-scale-down" src={smartphoneObj.photoName} />
        </div>
        <div className="p-3">
        
           <p>{smartphoneObj.name}</p>
           <div className="flex gap-2.5 border-b-1 border-gray3">
           <p>{smartphoneObj.price}</p>
        
           <p>{smartphoneObj.prevPrice}</p>
           </div>
        <p>Save - $ {prevPrice - price}</p>
        </div>
    </li>
  )}