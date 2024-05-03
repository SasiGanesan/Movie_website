import generateToken from '../utils/generateToken.js';
import User from '../Model/userModel.js';

//@desc  Auth user & get token
//@route POST /api/users/login
//@access Public
const authUser = async(req,res)=>{
    
    const {email,password}=req.body;
    // console.log(email)
    // console.log(password)
    try{ 
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password)))
    // console.log(user)
        {
            generateToken(res,user._id);
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            });
        }else{
            res.status(401).json({
                message: "Invalid email or password"
            })
        }
        }catch(error){
        // console.log(error)
        res.status(500).json({message:"Server Error"});
    }
};

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
    const { name, email, password, isAdmin } = req.body;

    try {
        // Check if user with the same email already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const user = await User.create({ name, email, password, isAdmin });

        // Check if user creation was successful
        if (user) {
            // Generate token for the user
            generateToken(res, user._id);

            // Respond with user details
                res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            // If user creation failed
            return res.status(404).json({ message: "Failed to register user" });
        }
    } catch (error) {
        // Handle any errors
        console.error(error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export {registerUser,authUser}
