import React, { useState } from "react";

const Referal: React.FC = () => {
  const [name, setName] = useState("");
  const [referralName, setReferralName] = useState("");
  const [referralEmail, setReferralEmail] = useState("");
  const [referralPhone, setReferralPhone] = useState("");
  const [aboutPerson, setAboutPerson] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      referralName,
      referralEmail,
      referralPhone,
      aboutPerson,
    });
  };

  return (
    <section className="bg-gray-50 md:p-16 pt-16">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow sm:max-w-md sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Referral Form
          </h1>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2 md:flex-row flex-col">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="referralName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Referral's Name
                </label>
                <input
                  type="text"
                  id="referralName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Referral's name"
                  value={referralName}
                  onChange={(e) => setReferralName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="referralEmail"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Referral's Email
              </label>
              <input
                type="email"
                id="referralEmail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Referral's email"
                value={referralEmail}
                onChange={(e) => setReferralEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="referralPhone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Referral's Phone
              </label>
              <input
                type="tel"
                id="referralPhone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Referral's phone"
                value={referralPhone}
                onChange={(e) => setReferralPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="aboutPerson"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Something About the Person
              </label>
              <textarea
                id="aboutPerson"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Write something about the person"
                value={aboutPerson}
                onChange={(e) => setAboutPerson(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit Referral
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Referal;
