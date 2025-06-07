export default function Column({ name, options }) {

   return (
    <div className="text-white">
        <div className="mb-5">
        <p className="relative inline font-semibold text-xl leading-none pb-4 after:my-underline2">{name}</p>
        </div>
        {options.map((i) => <p className="font-medium leading-[2.3]" key={i}>{i}</p>)}
    </div>
   )
}