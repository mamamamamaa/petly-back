const Friend = require("../../models/friend");

const getFriends = async (req, res) => {
  const allFriends = await Friend.find();

  res.json({
    status: "success",
    code: 200,
    data: {
      result: allFriends,
    },
  });
};

module.exports = getFriends;
