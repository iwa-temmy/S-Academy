const AppTag = (props) => {
  const { text, type } = props;

  const getBgColor = () => {
    switch (type) {
      case "danger":
        return "#FF5449";
      default:
        return "#5C5E67";
    }
  };
  return (
    <div
      className={`text-[${getBgColor()}] text-white text-[11px] font-semibold uppercase w-fit bg-gray-500 p-[3px] tracking-[0.25px]`}
    >
      {text}
    </div>
  );
};

export default AppTag;
