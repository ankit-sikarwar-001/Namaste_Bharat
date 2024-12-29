import React from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../Explore/explore.css";

export default function Explore() {
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const audioRefs = useRef([]);
  const play = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
    }
  };

  const stop = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
    }
  };

  useEffect(() => {
    const textElement = textRef.current;
    const textContent = "Explore the beauty of India through Namste Bharat";
    let index = 0;

    const typingEffect = setInterval(() => {
      if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index);
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);
  return (
    <div>
      <div className="w-full h-[calc(90vh)] overflow-hidden ">
        <img
          className="w-full h-screen object-cover object-top"
          src="/images/explore.png"
          alt="image"
        />
        <div className="relative bottom-[calc(80vh)] pl-[calc(15vw)] h-1/3 text-5xl  font-extrabold w-[calc(40vw)]">
          <p
            className="bg-gradient-to-r from-red-300 to-blue-300 bg-clip-text text-transparent "
            id="typing-text"
            ref={textRef}
          ></p>
        </div>
      </div>

      {/* music ssection */}
      <div
        className="mt-8 p-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cartoon-style-musical-notes-background_23-2151056769.jpg')",
        }}
      >
        <h2 className="text-center text-slate-800 text-3xl font-bold mb-4">
          Explore the diverse cultural music of India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center place-items-center">
          {[
            "Himalayan Songs",
            "Haryanvi Songs",
            "Punjabi Songs",
            "Rajasthani Songs",
            "Bengali Songs",
            "Tamil Songs",
          ].map((song, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-3">
              <img
                onClick={() => play(index)}
                onDoubleClick={() => stop(index)}
                className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
                src={`/images/${song.toLowerCase().replace(" ", "_")}.png`}
                alt={song}
              />
              <audio
                ref={audioRefs}
                src={`/audio/${song.toLowerCase().replace(" ", "_")}.m4a`}
                controls
                className="w-full mt-2 border border-gray-300"
              ></audio>
              <p className="text-center mt-2">{song}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            // onClick={redirectToLogin}
            className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
          >
            <NavLink className="mx-3 text-white my-2 md:my-0" to="/login">
              Explore More Music
            </NavLink>
          </button>
        </div>
      </div>

      {/* creative legacy */}
      <div className="h-[calc(90vh)] mt-5 w-full">
        <div className="h-1/2 bg-slate-700 relative">
          <div className="text-white text-center text-7xl font-thick font-extrabold py-10">
            <p>India's Creative Legacy</p>
            <p className="font-normal text-3xl mt-5">
              -----of timeless tradition-----
            </p>
          </div>
        </div>
        <section className="py-20 bg-transparent relative z-10 bottom-48">
          <div className="max-w-7xl mx-auto px-4">
            {/* Cards Slider */}
            <div
              ref={scrollRef}
              className="flex hover:overflow-x-scroll overflow-x-hidden space-x-8 scrollbar-hide h-96"
            >
              {/* Card 1 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="/crafts-images/kathputlis-rj.jpeg"
                  alt="kathputli-image"
                />
                <div className="p-6">
                  <h3 className="text-l font-bold text-slate-600 ">
                    Rajasthan
                  </h3>
                  <p className="text-black mb-1 mt-2">
                    Kathputlis :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Rajasthani Kathputlis showcase India's traditional puppet
                    artistry.
                  </p>
                  <a
                    href="/login"
                    className="text-slate-600 hover:text-slate-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="/crafts-images/bagh-print-mp.jpeg"
                  alt="bagh print-image"
                />
                <div className="p-6">
                  <h3 className="text-l font-bold text-slate-600 ">
                    Madhya Pradesh
                  </h3>
                  <p className="text-black mb-1 mt-2">
                    Bagh Print :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Bagh print of MP blends traditional printing with vibrant
                    natural dyes.
                  </p>
                  <a
                    href="/login"
                    className="text-slate-600 hover:text-slate-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="/crafts-images/bastar-dhokra.jpeg"
                  alt="dhokra-image"
                />
                <div className="p-6">
                  <h3 className="text-l font-bold text-slate-600 ">
                    Chattisgarh
                  </h3>
                  <p className="text-black mb-1 mt-2">
                    Bastar Dhokra :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Bastar Dhokra showcases ancient metal casting with tribal
                    designs.
                  </p>
                  <a
                    href="/login"
                    className="text-slate-600 hover:text-slate-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
              {/* Add More Cards Here */}
              {/* card - 4  */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="/crafts-images/bihar-khatwa.jpeg"
                  alt="kathputli-image"
                />
                <div className="p-6">
                  <h3 className="text-l font-bold text-slate-600 ">Bihar</h3>
                  <p className="text-black mb-1 mt-2">
                    Khatwa's :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    This art highlights intricate work & blending tradition with
                    creativity.
                  </p>
                  <a
                    href="/login"
                    className="text-slate-600 hover:text-slate-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
              {/* card 5 */}
              <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 ">
                <img
                  className="w-full h-48 object-cover"
                  src="/crafts-images/kathputlis-rj.jpeg"
                  alt="kathputli-image"
                />
                <div className="p-6">
                  <h3 className="text-l font-bold text-slate-600 ">
                    Rajasthan
                  </h3>
                  <p className="text-black mb-1 mt-2">
                    Kathputlis :-<span className="font-bold"></span>
                  </p>
                  <p className="text-black">
                    Rajasthani Kathputlis showcase India's traditional puppet
                    artistry.
                  </p>
                  <a
                    href="/login"
                    className="text-slate-600 hover:text-slate-800 mt-2 inline-block"
                  >
                    Know more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* legacy ends  */}
      <div className="text-4xl ">
        <p className="text-center text-white font-extrabold  relative top-12 underline">
          India's Diverse Beautiful Sarees{" "}
        </p>
        <div className=" w-full h-screen grid grid-cols-8 justify-center ">
          <div className="bg-red-800 w-full h-full relative">
            <img
              className="w-full h-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE"
              alt="banarasi sarees"
            />
          </div>
          <div className="bg-yellow-300  w-full">
            <img
              className="w-full h-full object-cover object-center"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZq30JVCQwrwgS_-6Az7wq_CIbLw5mIVDXYE1aH-_qG2hw3FPh4QcDl-gnI5N0UlAsadBz90uhm2_Zc7RpRvSqxaopqV5MxtsAtPcHKRg&usqp=CAE"
              alt="chikankari sarees"
            />
          </div>
          <div className="bg-blue-300 w-full">
            <img
              className=" w-full h-full object-cover "
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqCi7fak0MK2Bv7zDBlqH8VveybKGaA6l_jM_IiaeG37wA6jo1oOJyLblSmQ_NvfXieVLXp1c7EFPcyivDBRFT7FkDOpKLsxGXh9nMOkwZEETy4AuX1DGZ&usqp=CAE"
              alt="bhagalpuri sarees"
            />
          </div>
          <div className="bg-green-300 w-full">
            <img
              className="w-full h-full object-cover object-center"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZq30JVCQwrwgS_-6Az7wq_CIbLw5mIVDXYE1aH-_qG2hw3FPh4QcDl-gnI5N0UlAsadBz90uhm2_Zc7RpRvSqxaopqV5MxtsAtPcHKRg&usqp=CAE"
              alt="chikankari sarees"
            />
          </div>
          <div className="bg-slate-300 w-full"></div>
          <div className="bg-pink-300 w-full"></div>
          <div className="bg-purple-300 w-full"></div>
          <div className="bg-neutral-300 w-full"></div>
        </div>
      </div>
    </div>
  );
}
