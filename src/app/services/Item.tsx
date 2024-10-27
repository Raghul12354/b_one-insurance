const Item = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-10 grid gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
      <h4 className="text-2xl font-medium">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
};

export default Item;
