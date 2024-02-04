const useStopPropagation = (func) => {
  return (e) => {
    e.stopPropagation();
    func();
  };
};

export default useStopPropagation;
