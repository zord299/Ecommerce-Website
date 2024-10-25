import Image from "next/image";
export default function CartCard({ img, name, price, isExpanded }: any) {
  return (
    <div
      className={`flex gap-3 p-3 m-3 shadow justify-between ${
        isExpanded ? "w-auto" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-3">
        <Image src={img} alt="jhbcj" width={50} height={50}></Image>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="flex flex-col gap-3">
        <button>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
