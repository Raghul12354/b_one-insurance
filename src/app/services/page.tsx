import Item from "./Item";

const Services = () => {
  return (
    <section className="md:max-w-screen-2xl min-h-full mx-auto py-40 px-6">
      <h4 className="text-4xl font-semibold text-center">Our Service</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-7 mt-10">
        <Item
          title="Life insurance"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequatur obcaecati repellat odit quos eius ratione, accusamus ipsa, placeat distinctio doloribus ut error beatae. Voluptas reprehenderit autem minima alias est!"
        />
        <Item
          title="Health insurance"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequatur obcaecati repellat odit quos eius ratione, accusamus ipsa, placeat distinctio doloribus ut error beatae. Voluptas reprehenderit autem minima alias est!"
        />
        <Item
          title="Auto insurance"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequatur obcaecati repellat odit quos eius ratione, accusamus ipsa, placeat distinctio doloribus ut error beatae. Voluptas reprehenderit autem minima alias est!"
        />
        <Item
          title="Property insurance"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequatur obcaecati repellat odit quos eius ratione, accusamus ipsa, placeat distinctio doloribus ut error beatae. Voluptas reprehenderit autem minima alias est!"
        />
        <Item
          title="Car insurance"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, consequatur obcaecati repellat odit quos eius ratione, accusamus ipsa, placeat distinctio doloribus ut error beatae. Voluptas reprehenderit autem minima alias est!"
        />
      </div>
    </section>
  );
};

export default Services;
