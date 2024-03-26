const express = require("express");
const { authMiddleware } = require("../middlewares/middleware");

const { Account } = require("../root/db");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { ammount, to } = req.body;

  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!account || account.balance < ammount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance!!",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -ammount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: ammount } }
  ).session(session);

  await session.commitTransaction();
  res.json({
    message: "Transaction Completed!!",
  });
});

module.exports = router;
