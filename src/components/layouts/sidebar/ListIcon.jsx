const ListIcon = (props) => {
  const { Component, sx = {} } = props;
  return <Component sx={{ color: "inherit", ...sx }} className="h-[24px] w-[24px]" />;
};

export default ListIcon;
