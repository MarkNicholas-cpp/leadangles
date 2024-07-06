interface props{
    content:string
}
function GradientButton({content}: props) {
  return (
    <button className="glass rounded-full p-3 px-5 md:px-8  bg-gradient-to-r from-purple-200 to-red-400 hover:from-purple-500 hover:to-pink-900 text-transparent bg-clip-text">
      {content}
    </button>
  );
}

export default GradientButton;
