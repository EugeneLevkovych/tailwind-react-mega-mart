import { useState, useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

export default function Select({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const selectRef = useRef(null);

  useClickOutside(selectRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div ref={selectRef} className="relative">
      <div
        className="relative border-none rounded-3xl outline-none bg-blue1 font-medium text-sm leading-[1.3] text-gray4 whitespace-nowrap py-2 pl-3.5 pr-[2rem] cursor-pointer hover:bg-main-blue hover:text-white1 transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || title}

        <svg
          className={`absolute size-[18px] top-2 right-2 stroke-main-blue fill-transparent transition-transform duration-200 group-hover:stroke-blue1 ${isOpen ? 'rotate-180' : ''}`}
        >
          <use href="./sprite.svg#icon-arrow-down"></use>
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 bg-blue1 border-none mt-1 min-w-full z-20 overflow: visible">
          {options.map(option => (
            <div
              key={option}
              className="px-3.5 py-2 hover:bg-gray3 cursor-pointer text-sm transition-colors"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
