function Spinner() {
  return (
    <section className="fixed top-0 left-0 flex justify-center items-center align-middle backdrop-blur-sm w-full	z-50">
      <div className="h-[78.2vh] flex justify-center items-center align-middle relative">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    </section>
  );
}

export default Spinner;
