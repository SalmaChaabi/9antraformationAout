const userModel = require('../models/userSchema')

module.exports.getAllUsers = async (req, res) => {
    try {
        const userList = await userModel.find()
        res.status(200).json({ userList });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
module.exports.triUsers = async (req, res) => {
    try {
        const userList = await userModel.find().sort({ age: -1 })
        res.status(200).json({ userList });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

module.exports.searchUserByName = async (req, res) => {
    try {
        //console.log(req.query.prenom); //http://localhost:5000/auth/searchUserByName?prenom=sa
        //const prenom = req.query.nom;
        // const { prenom } = req.body;
        // const { prenom } = req.params;


        const userList = await userModel.find({ prenom: { $regex: prenom, $options: "i" } })
        res.status(200).json({ userList });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

module.exports.getUserById = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params
        //const id1 = req.params.id
        const user = await userModel.findById(id)
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

module.exports.adduserMembre = async (req, res) => {
    try {
        console.log(req.body);
        const { nom, prenom, email, password } = req.body;
        const roleMembre = "Membre";
        const user = new userModel({ nom, prenom, email, password, role: roleMembre });
        const useradded = await user.save();
        res.status(200).json(useradded);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
module.exports.adduserMembrewithimg = async (req, res) => {
    try {
        console.log(req.body);
        const { nom, prenom, email, password } = req.body;
        const { filename } = req.file;
        const roleMembre = "Membre";
        const user = new userModel({ nom, prenom, email, password, role: roleMembre, image_user: filename, });
        const useradded = await user.save();
        res.status(200).json(useradded);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


module.exports.adduserAdmin = async (req, res) => {
    try {
        console.log(req.body);
        const { nom, prenom, email, password } = req.body;
        const roleAdmin = "Admin";
        const user = new userModel({ nom, prenom, email, password, role: roleAdmin });
        const useradded = await user.save();
        res.status(200).json(useradded);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

module.exports.addusercoach = async (req, res) => {
    try {
        console.log(req.body);
        const { nom, prenom, email, password } = req.body;
        const rolecoach = "coach";
        const user = new userModel({ nom, prenom, email, password, role: rolecoach });
        const useradded = await user.save();
        res.status(200).json(useradded);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
module.exports.deleteUser = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params
        //const id1 = req.params.id

        const checkIfUserExists = await userModel.findById(id);
        if (!checkIfUserExists) {
            throw new Error("User not found");
        }
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json("deleted");
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
module.exports.updateUser = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params);
        const { id } = req.params
        const { nom, prenom, age } = req.body;

        const checkIfUserExists = await userModel.findById(id);
        if (!checkIfUserExists) {
            throw new Error("User not found");
        }

        if (age >= 100 && age <= 0) {
            throw new Error("problem age");
        }



        const updatedUser = await userModel.findByIdAndUpdate(id, {
            $set: { nom, prenom, age }
        }, { new: true }
        )
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

module.exports.searchUserByNamesort = async (req, res) => {
    try {
        console.log(req.body);
        const { prenom } = req.body;

        const userList = await userModel.find({
            prenom: { $regex: prenom, $options: "i" }
        }).sort({ age: -1 })
        res.status(200).json({ userList });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


