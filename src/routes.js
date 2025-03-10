import express from "express";
const router = express.Router();
import {

  integrationJsonContrl,
  checkBirthdaysForTelex,  
  getAllUsers, 
  createUser 

} from "./controllers.js"


//Birthday reminder routes
router.get("/integration.json", integrationJsonContrl);
router.post("/check-birthdays", checkBirthdaysForTelex);

//Birthday saver routes
router.get("/users", getAllUsers);
router.post("/save-user", createUser);


export default router;


