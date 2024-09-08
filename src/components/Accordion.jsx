import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Data = [
  {
    id: 1,
    title: "accordion one",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur non molestiae vitae, dolorem possimus voluptas harum velit fugit cum dolore accusantium voluptates ex accusamus aperiam nemo necessitatibus perspiciatis. Itaque.",
  },
  {
    id: 2,
    title: "accordion two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur non molestiae vitae, dolorem possimus voluptas harum velit fugit cum dolore accusantium voluptates ex accusamus aperiam nemo necessitatibus perspiciatis. Itaque.",
  },
  {
    id: 3,
    title: "accordion three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur non molestiae vitae, dolorem possimus voluptas harum velit fugit cum dolore accusantium voluptates ex accusamus aperiam nemo necessitatibus perspiciatis. Itaque.",
  },
];


function Accordion() {
const [open, setOpen] = useState(null);

  const handlerOpen = (id) => {
    setOpen(open === id ? null : id);
}

  return (
    <div className="accordion">
      {Data.map((item) => (
        <AccordionItem key={item.id} item={item} open={open} onOpen={handlerOpen} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, open, onOpen }) {
  const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${ isOpen ? "accordion__expanded" : "" }`}>
      <div className="accordion-item__header" onClick={()=> onOpen(item.id)}>
        {item.title}
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
