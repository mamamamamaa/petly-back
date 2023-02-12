const { Notice } = require("../../models/notice");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;

  const result = await Notice.findById({ _id: noticeId })
  //   .populate("owner", {
  //   email: 1,
  //   mobilePhone: 1,
  // });

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
};

module.exports = { getNoticeById };
