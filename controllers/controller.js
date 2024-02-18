const db = require("../models");
const Student = db.Student;

class Controller {
  static findAll(req, res) {
    Student.findAll()
      .then((employees) => {
        res.render("employee", { employees });
        // res.send(employees);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formAdd(req, res) {
    res.render("addForm");
  }
  static saveData(req, res) {
    const { name, email } = req.body;
    const image = req.file.filename;
    const object = { name, email, image };
    console.log(object, "ini object");
    Student.create(object)
      .then((data) => {
        // console.log(data, "ini data");
        res.redirect("/");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static formEdit(req, res) {
    const id = +req.params.id;
    Student.findByPk(id)
      .then((employees) => {
        res.render("updateForm", { employees });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
