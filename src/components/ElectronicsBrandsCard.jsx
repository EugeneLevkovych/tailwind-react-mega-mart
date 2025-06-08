export default function ElectronicsBrandsCard({ electronicsBrandsObj }) {

  return (
    <li className="w-97 h-51.5 flex border-none bg-blue1 rounded-2xl">
        <div className="p-5">
            <div className="w-25 h-8.5 flex justify-center items-center bg-white rounded-lg mb-5">
              <p className="font-semibold leading-[1.25] text-gray2">{electronicsBrandsObj.name}</p>
            </div>
          <div className="mb-5">
            <img src={electronicsBrandsObj.photoBrandsName} />
          </div>
          <p className="font-semibold text-2xl leading-[1.25] text-gray4 whitespace-nowrap">{electronicsBrandsObj.discont}</p>
        </div>
        <div className="w-52.5 flex justify-center items-center">
          <img src={electronicsBrandsObj.photoName} />
        </div>
        
    </li>
  )}