exports.home = (req, res) => {
  res.json({ message: "Welcome to the API!" });
};

exports.status = (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
};
