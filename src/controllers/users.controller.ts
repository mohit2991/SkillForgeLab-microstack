import { Request, Response } from 'express';
import { } from '../services/users.service';

// export const getUsersHandler = (_res: Request, res: Response) => {
//     const users = getAllUsers();
//     return res.json(users);
// }

// export const getUserByIDHandler = (req: Request, res: Response) => {
//     const userID = parseInt(req.params.userID, 10);

//     if (!userID) {
//         return res.status(400).json({ message: "UserID is required" });
//     }

//     const user = getUserByID(userID);
//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({ user });
// }

// export const updateUserByIDHandler = (req: Request, res: Response) => {
//     const userID = parseInt(req.params.userID, 10);

//     if (userID) {
//         return res.status(400).json({ message: "UserID is required" });
//     }

//     const updatedUser = updateUserByID(userID, req.body);

//     if(!updatedUser){
//         return res.status(404).json({ message: "User not found" }); 
//     }

//     return res.status(200).json(updatedUser);
// }