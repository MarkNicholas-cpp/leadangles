import PricingCard from "../Utils/PricingCard";

function DiscussionBoard() {
  return (
    <div className="">
      <div className="py-24 flex items-center justify-center">
        <div className=" text-primary flex items-center justify-center flex-col">
          <p className="text-7xl w-3/4 text-center">
            Get Paid Memberships with flexible plans and features
          </p>
          <p className="text-sm w-1/2 text-primary/60 text-center">
            At Lead Angels, you can access the brightest startups at an early
            stage. Embark on your angel investing journey and build a robust
            portfolio at affordable prices.
          </p>
        </div>
      </div>
      <div className="px-10 py-3">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mb-10 00">
        <div className="col-span-3">
          <p className="text-primary font-light text-2xl">Monthly/Yearly Plans</p>
        </div>
        <div className="col-span-3">
          <p className="text-primary/80 font-light text-2xl">Monthly Plan</p>
        </div>
        <PricingCard
        color="amber"
          pricingTitle={"Pro"}
          price={"24"}
          pricingDuration={"Monthly"}
          featuresHeader={"Features"}
          featuresAvailable={[
            "100 Social Connections",
            "4 Custom Domains",
            "unlimited User Role Management",
            "1 External Databases",
            "Custom Connection",
            "Advanced Deployment Options",
            "Extra Add-ons",

          ]}
        />
        <PricingCard
        color="green"
          pricingTitle={"Team"}
          price={"49"}
          pricingDuration={"Monthly"}
          featuresHeader={"Everything in Pro"}
          featuresAvailable={[
            "250 Social Connections",
            "unlimited Custom Domains",
            "unlimited User Role Management",
            "5 External Databases",
            "Premium Support"
          ]}
        />
        <PricingCard
        color="blue"
          pricingTitle={"Enterprise"}
          price={"79"}
          pricingDuration={"Monthly"}
          featuresHeader={"Everything in Team"}
          featuresAvailable={[
            "unlimited Social Connections",
            "unlimited Custom Domains",
            "unlimited User Role Management",
            "unlimited External Databases",
            "Admin Roles",
            "Deploy and Monitor",
            "Enterprise Add-ons",
          ]}
        />
        <div className="col-span-3">
          <p className="text-primary/80 font-light text-2xl">Yearly Plan</p>
        </div>
        <PricingCard
        color="amber"
          pricingTitle={"Pro"}
          price={"29"}
          pricingDuration={"Yearly"}
          featuresHeader={"Features"}
          featuresAvailable={[
            "100 Social Connections",
            "4 Custom Domains",
            "unlimited User Role Management",
            "1 External Databases",
            "Custom Connection",
            "Advanced Deployment Options",
            "Extra Add-ons",

          ]}
        />
        <PricingCard
        color="green"
          pricingTitle={"Team"}
          price={"54"}
          pricingDuration={"Yearly"}
          featuresHeader={"Everything in Pro"}
          featuresAvailable={[
            "250 Social Connections",
            "unlimited Custom Domains",
            "unlimited User Role Management",
            "5 External Databases",
            "Premium Support"
          ]}
        />
        <PricingCard
        color="blue"
          pricingTitle={"Enterprise"}
          price={"85"}
          pricingDuration={"Yearly"}
          featuresHeader={"Everything in Team"}
          featuresAvailable={[
            "unlimited Social Connections",
            "unlimited Custom Domains",
            "unlimited User Role Management",
            "unlimited External Databases",
            "Admin Roles",
            "Deploy and Monitor",
            "Enterprise Add-ons",
          ]}
        />
      </div>
      </div>
    </div>
  );
}

export default DiscussionBoard;
