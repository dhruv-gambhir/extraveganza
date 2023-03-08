import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      // firstName,
      // lastName,
      username,
      email,
      password,
      picturePath,
      friends,
      // location,
      // occupation,
    } = req.body;

    //encrypt password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      // username instead of F&L 
      // firstName,
      // lastName,
      username,
      email,
      password: passwordHash,// not store actual pws here
      picturePath,
      friends,
      // location,
      // occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();

    /* F-B */
    res.status(201).json(savedUser); //201 -> something has been created
  } catch (err) {
    res.status(500).json({ error: err.message }); //error from mongo DB
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username: username });  // use mongoose to find username
		if (!user) return res.status(400).json({ msg: "User does not exist. " });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		delete user.password; // not send to FE
		res.status(200).json({ token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const update = async (req, res) => {
	try {
		const { username, newUsername } = req.body;
		const user = await User.findOne({ username: username });
		if (!user) return res.status(400).json({ msg: "User does not exist. " });
		user.email = newUsername;
		const savedUser = await user.save();

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		res.status(201).json({ token, savedUser });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
