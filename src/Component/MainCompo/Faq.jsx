import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are pregnancy spots and how does your cream help?",
      answer:
        "Pregnancy spots, also known as melasma or chloasma, are common dark patches that appear on the skin due to hormonal changes. Our dermatologist-tested cream is formulated with natural ingredients that help to gently fade these dark spots and even out skin tone.",
    },
    {
      question: "Is the cream safe to use during pregnancy and breastfeeding?",
      answer:
        "Yes, our cream is gentle and dermatologist-tested, designed to be safe for moms. We recommend consulting with your healthcare provider before introducing any new skincare product during this time.",
    },
    {
      question: "How long until I see results?",
      answer:
        "While results can vary, many of our customers begin to see noticeable improvements within 7 days of consistent use. For best results, we recommend using the cream as directed over a few weeks to a couple of months.",
    },
    {
      question:
        "Can this cream be used on other dark spots besides those from pregnancy?",
      answer:
        "Yes, our formula is effective on various types of hyperpigmentation, including sun spots and age spots. It works to restore your skin's natural glow regardless of the cause.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <main className="flex items-center flex-col justify-between bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dot-pattern-bg.svg')] bg-cover text-sm text-gray-800 max-md:px-4 text-center h-[585px]">
        {/* Navbar */}

        <div className="lg:max-w-5xl m-auto px-4 ">


          <div className="pb-8">
            <h1 className="text-2xl text-center font-poppins bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent  md:text-5xl lg:text-4xl font-semibold leading-snug mx-auto">
              Frequently{" "}
              <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
                Asked <br />
              </span>
              Questions
            </h1>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/50 py-3 px-4 rounded-md shadow cursor-pointer "
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm text-start font-normal text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-xl text-gray-600 font-bold">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden  text-start transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
