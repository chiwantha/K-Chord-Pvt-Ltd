const Tag = ({ title }) => {
  return (
    <div
      className="bg-[#29375D]/20 border rounded-lg px-2 py-1
    text-[#7c9efa] border-[#7c9efa] hover-[#29375D]/40 hover:border-[#7c9efa]/40
    transition-all duration-200 cursor-default select-none
    text-lg font-medium"
    >
      {title}
    </div>
  );
};

export default Tag;
