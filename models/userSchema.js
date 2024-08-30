const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userschema = new mongoose.Schema(
    {
    nom: { type: String, required: true },
    prenom : String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image_user: { type: String, default: "Users.png" },
    role: { type: String , enum: ["Admin", "Membre" , "coach"] },
    etat: {type: Boolean},
    age: {type:Number},
   
},
 { timestamps: true }
);

userschema.post("save",function(req,res,next){
    console.log("new user was created & saved successfully");
    next();
});


userschema.pre("save",async function(next){
    try {
        const salt = await bcrypt.genSalt();
        const User = this ;
        User.password = await bcrypt.hash(User.password,salt);
        User.etat= false;
        next();
    } catch (err) {
        next(err);
    }

});




const User = mongoose.model("User",userschema);
module.exports= User;

