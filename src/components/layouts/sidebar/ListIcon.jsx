const ListIcon = (props) => {
  const { Component, sx = {} } = props;
  return <Component sx={{ color: "inherit", ...sx }} />;
};

export default ListIcon;
