import Image from "next/image";

const Item = ({ text }: { text: string }) => {
  return (
    <article className="bg-gray-100 shadow-md rounded-2xl min-w-40 min-h-20 p-5">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </span>
      <p className="text-xl mt-5">{text}</p>
    </article>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto min-h-screen">
      <h4 className="text-5xl font-semibold text-center">Why choose us</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="flex flex-col gap-5">
          <Item text="24/7 Claims Assistance" />
          <Item text="Comprehensive Customer Support" />
          <Item text="Always Here for You" />
          <Item text="Reliable Around-the-Clock Service" />
        </div>
        <Image
          src="/contact_Image.jpg"
          alt="support_vector"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
