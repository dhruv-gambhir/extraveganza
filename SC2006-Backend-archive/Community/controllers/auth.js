import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * REGISTER USER
 */
export const register = async (req, res) => {
	try {
		const {
			username,
			password,
			picturePath,
			friends,
		} = req.body;

		//encrypt password
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const user = new User({
			username,
			password: passwordHash,// not store actual pws here
			picturePath,
			friends,
			viewedProfile: Math.floor(Math.random() * 10000),
			impressions: Math.floor(Math.random() * 10000),
		});
		const savedUser = await user.save();

		/* F-B */
		const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
		delete user.password; // not send to FE
		res.status(201).json({ token, user }); //201 -> something has been created

	} catch (err) {
		res.status(500).json({ error: err.message }); //error from mongo DB
	}
};

/**
 * LOG IN 
 */
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

/** 
 * UPDATE PASSWORD 
 */
export const update = async (req, res) => {
	try {
		const { username, newUsername, newPassword } = req.body;
		const user = await User.findOne({ username: username });
		if (!user) return res.status(400).json({ msg: "User does not exist. " });
		user.username = newUsername;
		if (newPassword) {
			const salt = await bcrypt.genSalt();
			user.password = await bcrypt.hash(newPassword, salt);
		}

		const savedUser = await user.save();

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		delete user.password;
		res.status(201).json({ token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
/**
 * DELETE ACCOUNT
 */
export const deleteAccount = async (req, res) => {
	try {
		const { username } = req.body;
		const user = await User.findOne({ username: username });  // use mongoose to find username
		if (!user) return res.status(400).json({ msg: "User does not exist. " });

		// const isMatch = await bcrypt.compare(password, user.password);
		// if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

		user.delete();
		res.status(204).json();
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
