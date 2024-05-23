export default function BT05() {
  return (
    <div>
      <div className="relative bg-[#b7e8fd] border-[20px] border-[#d7f2fe] w-[300px] h-[200px] px-[25px] py-[30px] ">
        Relative parent
        <div className="absolute top-[110px] left-1 text-white font-medium bg-[#4391b6] px-[15px] py-[10px] rounded-[10px]">
          Abslote child
        </div>
      </div>
    </div>
  );
}
