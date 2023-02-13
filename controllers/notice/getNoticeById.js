const { Notice } = require("../../models/notice");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  console.log(noticeId);

  const result = await Notice.findById({ _id: noticeId });

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
