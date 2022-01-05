import express  from "express";
import { getAllCompany, getCompanyByID, createCompany, updateCompany, deleteCompany } from "../controllers/companyController.js";

const router = express.Router();

// get all company
router.get("/company", getAllCompany);
// get a company by id
router.get("/company/:id", getCompanyByID);
// create company
router.post("/company", createCompany);
// update company 
router.patch("/company/:id", updateCompany);
// delete company
router.delete("/company/:id", deleteCompany);

export default router;