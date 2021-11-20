const validNameContro = async (req, res) => {
  // console.log("Home page");
  // res.send("HomePage");
  const user = req.user;
  console.log("============", user);
  return res.json({ name: req.user });
};

module.exports = {validNameContro}


