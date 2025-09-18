import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// your testimonial data (with names, avatars, stars, reviews)
const testimonials = [
  {
    name: "Lucas Meyer",
    avatar: "https://i.pravatar.cc/80?img=21",
    stars: 4.9,
    review:
      "Contact form of our corporate website was broken. Fixed and redesigned it with a clean UX at a fair price.",
  },
  {
    name: "Sophie Laurent",
    avatar: "https://i.pravatar.cc/80?img=47",
    stars: 4.8,
    review:
      "Added complete online ordering system to our European café chain website with seamless checkout.",
  },
  {
    name: "Ethan Brooks",
    avatar: "https://i.pravatar.cc/80?img=33",
    stars: 4.7,
    review:
      "Delivered a fresh new design for our SaaS dashboard and improved page speed dramatically.",
  },
  {
    name: "Elena Schmidt",
    avatar: "https://i.pravatar.cc/80?img=55",
    stars: 4.6,
    review:
      "Redesigned our hotel booking interface – better UX increased our reservations instantly.",
  },
  {
    name: "Leo Andersson",
    avatar: "https://i.pravatar.cc/80?img=17",
    stars: 4.9,
    review:
      "Built a custom food delivery prototype for our startup. Great communication & fast turnaround!",
  },
  {
    name: "Ava Müller",
    avatar: "https://i.pravatar.cc/80?img=28",
    stars: 4.8,
    review:
      "Integrated WhatsApp order button and live chat on our online store. Highly recommended.",
  },
];

// stars with half-fill support
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className="text-orange-400">★</span>);
    } else if (i === fullStars && fraction > 0) {
      stars.push(
        <span
          key={i}
          className="relative inline-block text-orange-400"
          style={{ width: "16px", display: "inline-block", position: "relative" }}
        >
          <span
            style={{
              position: "absolute",
              overflow: "hidden",
              width: `${fraction * 100}%`,
              top: 0,
              left: 0,
            }}
          >
            ★
          </span>
          <span className="text-gray-600">★</span>
        </span>
      );
    } else {
      stars.push(<span key={i} className="text-gray-600">★</span>);
    }
  }

  return <div className="text-lg flex">{stars}</div>;
};

// single card
const Card = ({ testimonial }) => (
  <div
    className="w-[300px] bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 mr-6 flex-shrink-0 cursor-pointer
      transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-orange-600/80"
  >
    {/* avatar */}
    <div className="flex justify-center mb-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full border-2 border-orange-500 object-cover"
      />
    </div>

    {/* name */}
    <p className="font-semibold text-white text-center mb-2 hover:text-orange-500">
      {testimonial.name}
    </p>

    {/* review */}
    <p
      className="text-gray-300 italic mb-4 break-words min-h-[3.5rem] text-center"
      style={{ whiteSpace: "normal" }}
    >
      “{testimonial.review}”
    </p>

    {/* stars + numeric rating */}
    <div className="flex items-center justify-center space-x-2">
      <StarRating rating={testimonial.stars} />
      <span className="text-sm text-green-400 font-medium">
        ({testimonial.stars.toFixed(1)})
      </span>
    </div>
  </div>
);

const ReviewsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden select-none">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-orange-500 mb-4">What Clients Say</h1>
          <p className="text-gray-300 text-lg mb-6">Real feedback from real people.</p>
          <div className="inline-block bg-orange-500 px-6 py-2 rounded-full text-white font-semibold mb-12">
            100+ Verified Reviews
          </div>

          {/* scrolling ticker */}
          <div
            className="relative w-full overflow-hidden whitespace-nowrap border-t border-b border-gray-700 py-6"
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector("div").style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector("div").style.animationPlayState = "running")
            }
          >
            <div className="inline-flex animate-scrollTicker">
              {[...testimonials, ...testimonials].map((t, i) => (
                <Card key={i} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scrollTicker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scrollTicker {
            animation: scrollTicker 40s linear infinite;
            will-change: transform;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default ReviewsPage;
