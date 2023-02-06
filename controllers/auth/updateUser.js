const { HttpError } = require('../../middlewares');
const {User} = require('../../models/user');

const updateUser = async (req, res) => {

    const {_id} = req.user;

    const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
            new: true
          });

        if (!updatedUser) {
          throw HttpError(404)
        }
      res.json(updatedUser);
}


module.exports = updateUser;