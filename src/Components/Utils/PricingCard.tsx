interface Props {
  pricingTitle: string;
  price: string;
  pricingDuration: "Monthly" | "Yearly";
  featuresHeader: string;
  featuresAvailable: string[];
  color: string; // Add color prop
}

function PricingCard({
  pricingTitle,
  price,
  pricingDuration,
  featuresHeader,
  featuresAvailable,
  color, // Destructure color prop
}: Props) {
  return (
    <div className={`shadow rounded-md  p-5 border-t-4 border-${color}-500`}>
      <div className="heading">
        <p className={`text-${color}-500 font-bold text-5xl`}>{pricingTitle}</p>
        <p className={`text-primary font-light text-lg`}>
          Everything at your fingertips
          <p className="hidden bg-amber-500 text-amber-500 border-amber-500"></p>
          <p className="hidden bg-green-500 text-green-500 border-green-500"></p>
          <p className="hidden bg-blue-500 text-blue-500 border-blue-500"></p>
        </p>
      </div>
      <div className="pricing">
        <p className={`text-${color}-500/60 font-bold text-5xl`}>
          <span className="text-sm">$</span>
          <span className="text-5xl">{price}</span>
          <span className="text-sm">
            {pricingDuration === "Monthly" ? "/m" : "/m for year (12 Months)"}
          </span>
        </p>
      </div>
      <hr className={`border border-gray-300 my-5`} />
      <div className="features">
        <p className={`text-primary font-normal text-lg my-3`}>
          {featuresHeader}
        </p>
        {featuresAvailable.map((feature, index) => (
          <p key={index} className={`text-${color}-500 indent-4 text-lg flex`}>
            <i>&#10004;</i>
            {feature}
          </p>
        ))}
      </div>
      <button className={`block w-full rounded py-2 text-${color}-500 border border-${color}-500 `}>Get Started</button>
    </div>
  );
}

export default PricingCard;
