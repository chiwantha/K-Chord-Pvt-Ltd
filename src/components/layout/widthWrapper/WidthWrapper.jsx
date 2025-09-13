const WidthWrapper = ({ children }) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 md:px-4 w-full">
      {children}
    </section>
  );
};

export default WidthWrapper;
