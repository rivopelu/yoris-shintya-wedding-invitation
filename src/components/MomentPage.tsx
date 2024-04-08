import { ASSETS } from '../assets/assets';

export default function MomentPage() {
  return (
    <div className="py-14  backdrop-blur-[2px]">
      <h1
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos="fade-up"
        className="text-6xl text-slate-600 text-center mb-6 tangerine-regular"
      >
        Our Moment
      </h1>
      <div className="flex items-center gap-3 overflow-x-auto py-10">
        {ASSETS.MOMENT.map((item, i) => (
          <img
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos={i % 2 === 0 ? 'fade-down' : 'fade-up'}
            className={`lg:h-[400px] h-[230px] rounded-md border-2 shadow-lg shadow-slate-500/30 border-white ${i % 2 === 0 ? 'mb-24' : 'mt-5'}`}
            alt={item}
            src={item}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
