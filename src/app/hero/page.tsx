const Hero = () => {
  return (
    <main className="min-h-[91vh] bg-[url('/insurance_bg.jpg')] bg-cover flex items-center">
      <div className="flex flex-col w-[50%] gap-7 pl-40 text-white">
        <h1 className="text-6xl font-medium">B-one Insurance</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ratione itaque eligendi nobis illum nam, totam iusto animi recusandae aperiam deleniti maiores quae eos quos esse quasi aliquam consequatur voluptatum.
        </p>
        <button className="btn h-14 w-40 text-xl">Contact us</button>
      </div>
    </main>
  );
};

export default Hero;
