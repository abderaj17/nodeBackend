//data modeling
//data validation

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,

    required: [true, `Email is required`],
    unique: [true, `Email already exists`],

    trim: true,
    lowercase: true,
  },

  email: {
    type: String,
    lowercase: true,

    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value);
      },
      age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age should be greater than 18"],
      },
      role: {
        type: String,
        required: true,
        enum: ["admin", "user"],
        default: "user",
      },
      address: {
        type: Number,
        required: false,
        trim: true,
      },
    },
  },

  app.post("/login", async(req, res=>){
    try{
        const {email, password} = req.body;
        const user = await user.find({email: email});

        if(!user){
            res.status(201).send("Login successfull");
        }catch(err){
            console.log(err);
        }
    }
  })
});
