const sortError = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ meddelande: 'error' });
  } else
    //server error
    res.status(500).json({ meddelande: 'error' });
};

export default sortError; 