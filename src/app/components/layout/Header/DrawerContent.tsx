import Image from "next/image";

interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface DrawerContentProps {
  items: Item[];
  title: string;
  onClose: () => void;
}

const DrawerContent = ({ items, title, onClose }: DrawerContentProps) => (
  <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-xl z-50 p-6 overflow-y-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <button onClick={onClose} className="text-xl">&times;</button>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border p-3 rounded">
          <Image src={item.image} alt={item.name} width={50} height={50} />
          <div>
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-gray-600 text-sm">{item.price}$</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DrawerContent;
