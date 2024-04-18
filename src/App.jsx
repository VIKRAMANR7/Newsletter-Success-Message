import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const emailValidation = (e) => {
    e.preventDefault();
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regex.test(input)) {
      setMessage("");
      setIsSuccess(true);
    } else {
      setMessage("Valid email required");
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const reset = () => {
    setInput("");
    setMessage("");
    setIsSuccess(false);
  };

  return (
    <div className="bg-charcoal-grey min-h-screen flex justify-center items-center">
      {isSuccess ? (
        <div className="w-[440px] p-[40px] bg-white rounded-[20px] mobile:py-[70px] mobile:w-[375px] mobile:px-[30px] mobile:rounded-none">
          <div className="bg-icon-success bg-no-repeat w-[64px] h-[64px]"></div>
          <h1 className="text-charcoal-grey text-[44px] leading-[44px] font-bold py-[25px]">
            Thanks for subscribing!
          </h1>
          <p className="pr-[20px] text-[15px] text-dark-slate-grey pb-[30px]">
            A confirmation has been sent to{" "}
            <span className="font-bold">{input}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button
            onClick={reset}
            className="w-[350px] h-[50px] bg-dark-slate-grey text-white font-bold rounded-md hover:bg-[linear-gradient(90deg,#ff3e83,#fd634a)] hover:shadow-[0_16px_24px_#ff3e8355] mobile:w-[315px] mobile:mt-[100px]"
          >
            Dismiss message
          </button>
        </div>
      ) : (
        <div className="w-[800px] bg-white rounded-[25px] pl-[50px] py-[20px] pr-[20px] gap-[40px] flex items-center font-Roboto mobile:flex-col-reverse mobile:pl-0 mobile:pr-0 mobile:pt-0 mobile:pb-[50px] mobile:rounded-none mobile:justify-center">
          <section className="px-[30px]">
            <h1 className="text-[36px] text-charcoal-grey font-bold pb-[5px]">
              Stay updated!
            </h1>
            <p className="text-dark-slate-grey pb-[20px]">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="pb-[15px]">
              <li className="text-dark-slate-grey pb-[10px] bg-icon-list bg-no-repeat pl-[35px]">
                Product discovery and building what matters
              </li>
              <li className="text-dark-slate-grey pb-[10px] bg-icon-list bg-no-repeat pl-[35px]">
                Measuring to ensure updates are a success
              </li>
              <li className="text-dark-slate-grey pb-[10px] bg-icon-list bg-no-repeat pl-[35px]">
                And much more!
              </li>
            </ul>
            <div className="pb-[20px]">
              <div className="flex justify-between">
                <label className="text-[13px] font-bold pb-[10px]">
                  Email address
                </label>
                <span className="text-[13px] text-tomato font-bold pb-[10px] pr-[40px]">
                  {message}
                </span>
              </div>
              <input
                type="text"
                value={input}
                onChange={handleChange}
                className={`w-[350px] h-[50px] outline outline-[1.5px] outline-grey rounded-md indent-[20px] placeholder:text-[18px] cursor-pointer focus:outline-dark-slate-grey ${
                  message ? "error-red" : ""
                } mobile:w-[315px] mobile:placeholder:text-[16px]`}
                placeholder="email@company.com"
              />
            </div>
            <button
              onClick={emailValidation}
              className="w-[350px] h-[50px] bg-dark-slate-grey text-white font-bold rounded-md hover:bg-[linear-gradient(90deg,#ff3e83,#fd634a)] hover:shadow-[0_16px_24px_#ff3e8355] mobile:w-[315px]"
            >
              Subscribe to monthly newsletter
            </button>
          </section>
          <section>
            <div className="bg-illustration-desktop bg-no-repeat w-[300px] h-[445px] bg-cover mobile:bg-illustration-mobile mobile:w-[375px] mobile:h-[284px]"></div>
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
