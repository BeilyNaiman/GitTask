const { createUser } = require('../modules/user');
const User = require('../modules/user');
const controller={

    getAllUsers: async (req, res) => {
       res.status(200).json(User.getUsers);
    },

    getUserById: async (req, res) => {
        try {
          const userId = req.params.id;
          const user = await User.getUserById(userId);
      
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
      
         return res.status(200).json(user);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server Error' });
        }
      },

      addUser:(req,res)=>{
        let user=req.body;
      res.status(201).json  (User.createUser(user.name, user.email, user.phone, user.dateOfBirth));
      },

      deleteUser:(req,res)=>{
       let del=User.deleteUser(req.params.id);
       if(del)
       res.status(200).json("deleted succesfully");
       res.status(500).send("user not exist");
      },

      changeUser:(req,res)=>{
        let details=req.body;
       let user=User.updateUser(details.id,details.name, details.email,details. phone, details.dateOfBirth);
       if (user)
       res.status(201).json(user);
       res.status(500).send("user not exist");
      }
  
 

      }
module.exports = controller;
