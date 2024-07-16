interface props {
  MemImg: string;
  MemName: string;
  MemPosition: string;
}
function MemberCard({ MemImg, MemName, MemPosition }: props) {
  return (
    <div className="">
      <div className="h-32 rounded-full overflow-hidden w-32 block mx-auto">
        <img
          src={MemImg}
          alt="Mem Image"
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="text-center text-primary">{MemName}</div>
      <div className="text-center text-gray-400">{MemPosition}</div>
    </div>
  );
}

export default MemberCard;
