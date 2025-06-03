export default function Select({title, options}) {

  return (
      <select className="border-0 rounded-3xl outline-none bg-blue1 font-medium text-sm leading-[1.3] text-gray4 py-2 px-3.5" name={title} defaultValue={""}>
        <option value="" disabled hidden>{title}</option>
         {options.map(option =><option value={option} key={option}>{option}</option>)}
      </select>       
  )}