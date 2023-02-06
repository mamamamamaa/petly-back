// const schemaUpdateNoticeFavorite = require("../../schemas/updateNoticeFavorite");
const {Notice} = require("../../models/Notice");
const { ctrlWrapper } = require("../../helpers")

const updateNoticeFavorite = async (req, res) => {
    const { noticeId } = req.params;
    // const { favorite = false } = req.body;
    const { _id: userId } = req.user;
    // if (!favorite) {
    //     return res.status(400).json({
    //         status: 'error',
    //         code: 400,
    //         message: 'missing field favorite',
    //     })
    // }

    // const { error} = schemaUpdateNoticeFavorite.validate({ favorite });
    // if (error) {
    //     return res.status(400).json({ message: "missing required name field" });
    // }
    const result = await Notice.findByIdAndUpdate(noticeId, {
      $addToSet: {
        favorite: userId,
      },
    }).exec();
    if (result) {
        res.json(result)
    }
    else {
        res.status(404).json({
            status: 'error',
            code: 404,
            message: `Not found contact id: ${noticeId}`,
            data: 'Not Found',
        })
    }
}

//   const result = await Notice.findByIdAndUpdate({ _id: noticeId }, value, {
//     returnOriginal: false,
//   });

//   if (result) {
//     res.json(result);
//   } else {
//     res.status(404).json({
//       status: "error",
//       code: 404,
//       message: `Not found contact id: ${noticeId}`,
//       data: "Not Found",
//     });
//   }
// };

module.exports = { updateNoticeFavorite: ctrlWrapper(updateNoticeFavorite) };
