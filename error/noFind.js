const noFind = (req, res, next) => {
  const error = new Error('Doesnt exist');
  error.status = res.status;
  next(error);
};

export default noFind; 