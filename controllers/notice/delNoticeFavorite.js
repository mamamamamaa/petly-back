const { User } = require("../../models/user");

const delNoticeFavorite = async (req, res) => {
    const { noticeId } = req.params;
    const { _id: user } = req.user;

    const result = await User.findByIdAndUpdate(user, {
        $pull: {
            favorite: noticeId
        }
    })
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Not found notice id: ${noticeId}`,
            data: "Not Found",
        });
    }
}

module.exports = { delNoticeFavorite }