export default function ElectronicsBrandsCard({ electronicsBrandsObj }) {

  return (
    <li className="relative w-97 h-51.5 flex border-none rounded-2xl overflow-hidden" style={{ backgroundColor: `var(--color-${electronicsBrandsObj.backColor})`}}>
        <div className="absolute flex justify-center items-center size-56.5 top-0 right-0 border rounded-full" style={{ borderColor: `var(--color-${electronicsBrandsObj.decorColor})`}}>
            <div className="size-52 rounded-full" style={{ backgroundColor: `var(--color-${electronicsBrandsObj.decorColor})`}} />
        </div>
        <div className="p-5">
            <div className="w-25 h-8.5 flex justify-center items-center bg-white rounded-lg mb-5" style={{ backgroundColor: `var(--color-${electronicsBrandsObj.decorColor})`}}>
              <p className="font-semibold leading-[1.25]" style={{ color: `var(--color-${electronicsBrandsObj.textColor})`}}>{electronicsBrandsObj.name}</p>
            </div>
          <div className="mb-5">
            <img src={electronicsBrandsObj.photoBrandsName} />
          </div>
          <p className="font-semibold text-2xl leading-[1.25] whitespace-nowrap" style={{ color: `var(--color-${electronicsBrandsObj.textColor})`}}>{electronicsBrandsObj.discont}</p>
        </div>
        <div className="w-52.5 flex justify-center items-center z-10">
          <img src={electronicsBrandsObj.photoName} />
        </div>    
    </li>
  )}