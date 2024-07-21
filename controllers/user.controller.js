const Users = require("../models/user.model");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const payload = req.body;

    if (typeof payload.id !== "number" || isNaN(payload.id)) {
      return res
        .status(400)
        .send({ message: "Invalid ID: ID must be a number." });
    }

    const userWithId = await Users.findOne({ id: payload.id });
    if (userWithId) {
      return res
        .status(400)
        .send({ message: "User already exists with given id" });
    }

    const userWithEmail = await Users.findOne({ email: payload.email });
    if (userWithEmail) {
      return res
        .status(400)
        .send({ message: "User already exists with given email" });
    }
    const user = new Users(payload);
    await user.save();
    res.status(201).send({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while creating the User.",
      error: error,
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "", sort = "id" } = req.query;
    const query = {
      $or: [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ],
    };

    const users = await Users.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).send({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//update user By Id
exports.updateUser = async (req, res) => {
  try {
    const user = await Users.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//delete user by id
exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findOneAndDelete({ id: req.params.id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({
      message: "User deleted successfully",
      deleteUser: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
