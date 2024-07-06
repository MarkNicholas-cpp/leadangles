import "./ListItemCard.css";

function ListItemCard() {
  return (
    <div className="aspect-[3/4] w-52 lg:w-64 m-3 border-t border-b border-gray-600 cursor-pointer flex-shrink-0 md:flex-grow">
      <p className="text-white text-xl font-semibold my-2">
        Investor Management
      </p>
      <div className="w-full h-full rounded-2xl overflow-hidden relative hover:scale-95 transition-all duration-1000">
        <img
          src="https://images.pexels.com/photos/21939556/pexels-photo-21939556/free-photo-of-images-in-frames-on-wall.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Photo of images in frames on wall"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full inset-0 bg-black/50 card-img-hover">
          <div className="relative h-full w-full card-img-inner">
            <div className="text-white font-bold text-lg aspect-video glass p-3">Graph</div>
          </div>
        </div>
      </div>
      <p className="text-white inline text-md">
        Investor relations reimagined.
      </p>
      <p className="text-gray-400 inline-block mb-3 text-md">
        Leverage software to drive meaningful, actionable engagement.
      </p>
    </div>
  );
}

export default ListItemCard;
