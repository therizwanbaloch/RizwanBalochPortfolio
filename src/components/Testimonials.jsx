import React from "react";

const testimonials = [
  { name: "Aarav Mehta", stars: 4.8, review: "Absolutely professional and delivered on time. The quality exceeded expectations." },
  { name: "Fatima Noor", stars: 3.9, review: "Smooth experience. Communication was clear and result was impressive." },
  { name: "Oliver Harris", stars: 4.5, review: "Top-notch service. Attention to detail and responsiveness was excellent." },
  { name: "Zain Abbas", stars: 4.6, review: "Clean and modern work. It was exactly what we envisioned for our brand." },
  { name: "Sophia Walker", stars: 3.7, review: "Delivered beyond expectations. Everything was well-organized and on point." },
  { name: "Priya Reddy", stars: 4.9, review: "The whole process was seamless and very professional from start to finish." },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className="text-orange-400">★</span>);
    } else if (i === fullStars && fraction > 0) {
      stars.push(
        <span key={i} className="relative inline-block text-orange-400" style={{ width: '16px', display: 'inline-block', position: 'relative' }}>
          <span style={{ position: "absolute", overflow: "hidden", width: `${fraction * 100}%`, top: 0, left: 0 }}>★</span>
          <span className="text-gray-600">★</span>
        </span>
      );
    } else {
      stars.push(<span key={i} className="text-gray-600">★</span>);
    }
  }
  return <div className="text-lg mb-2">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-12 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-2">Testimonials</h2>
        <p className="text-gray-300 text-lg mb-6">Let my client speak</p>
        <div className="inline-block bg-orange-500 px-6 py-2 rounded-full text-white font-semibold mb-10">
          100+ Reviews
        </div>

        
        <div
          className="relative w-full overflow-hidden whitespace-nowrap border-t border-b border-gray-700 py-4"

          onMouseEnter={(e) => e.currentTarget.querySelector('div').style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.querySelector('div').style.animationPlayState = 'running'}
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
    </section>
  );
};

const Card = ({ testimonial }) => {
  return (
    <div
      className="w-[300px] bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 mr-6 flex-shrink-0 cursor-pointer
        transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-orange-600/80"
    >
      <StarRating rating={testimonial.stars} />
      <p className="text-gray-300 italic mb-4 break-words min-h-[3.5rem] line-clamp-3" style={{ whiteSpace: "normal" }}>
        "{testimonial.review}"
      </p>
      <p
        className="font-semibold text-white truncate hover:text-orange-500"
        title={testimonial.name}
      >
        - {testimonial.name}
      </p>
    </div>
  );
};

export default Testimonials;
