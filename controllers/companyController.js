import db from "../config/database.js";

const getAllCompany = (req, res) => {
    db.query("SELECT * FROM company", (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.send(data);
        }
    });
};

const getCompanyByID = (req, res) => {
    db.query("SELECT * FROM company WHERE id = ?", [req.params.id], (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.send(data);
        }
    });
};

const createCompany = (req, res) => {
    db.query("INSERT INTO company (name) VALUES (?)", [req.body.name], (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.send({ message: "Created successfuly"});
        }
    })
};

const updateCompany = (req, res) => {
    db.query("UPDATE company SET name = ? WHERE id = ?;", [req.body.name, req.params.id], (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.send({ message: "Updated successfuly"});
        }
    })
};

const deleteCompany = (req, res) => {
    db.query("DELETE FROM company WHERE id = ?", [req.params.id], (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.send({ message: "Deleted successfuly"});
        }
    });
};

export { getAllCompany, getCompanyByID, createCompany, updateCompany, deleteCompany };