export default function BT08() {
  return (
    <div>
      <h5>Các phần tử nằm bên trái</h5>
      <div className="flex gap-[10px] w-[200px] h-[50px] border border-blue-500 items-center   ">
        <div className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">01</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">02</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">03</div>
      </div>
      <h5>Các phần tử nằm bên phải</h5>
      <div className="flex gap-[10px] w-[200px] h-[50px] border border-blue-500 items-center justify-end   ">
        <div className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">01</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">02</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">03</div>
      </div>
      <h5>Các phần tử nằm ở giữa</h5>
      <div className="flex gap-[10px] w-[200px] h-[50px] border border-blue-500 items-center justify-center   ">
        <div className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">01</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">02</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">03</div>
      </div>
      <h5>Các phần tử nằm giãn ra 2 bên</h5>
      <div className="flex gap-[10px] w-[200px] h-[50px] border border-blue-500 items-center justify-between   ">
        <div className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">01</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">02</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">03</div>
      </div>
      <h5>Các phần tử nằm đều 2 bên</h5>
      <div className="flex gap-[10px] w-[200px] h-[50px] border border-blue-500 items-center justify-around">
        <div className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">01</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">02</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">03</div>
      </div>
      <h5>Các phần tử giữa đều</h5>
      <div className="flex gap-[10px] w-[200px] h-[50px] border border-blue-500 items-center justify-r">
        <div className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">01</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">02</div>
        <div  className="w-[30px] h-[30px] bg-[#3b82f6] leading-[30px] text-center text-white rounded-[5px]">03</div>
      </div>
    </div>
  );
}
