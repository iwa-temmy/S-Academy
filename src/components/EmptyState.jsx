const EmptyState = (props) => {
  const { description } = props;
  return (
    <div className="flex justify-center items-center">
      <p>{description}</p>
    </div>
  );
};

export default EmptyState;
