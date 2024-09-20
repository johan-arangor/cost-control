const servicesController = {};
const mysql = require('../src/middleware/connection');

servicesController.getAllEntity = async (req, res) => {
    let dataForm = req.body;
    
    mysql.query(`SELECT * FROM entitys WHERE disable = 0`, 
    function (err, result) 
    {
        if (err) {
            res.status(500).json({
                data: null,
                message: {
                    title: "Ocurrion un error inesperado",
                    text: `error ${err}`,
                    icon: "error"
                }
            });
        } else {
            res.status(200).json({
                data: result
            });
        }
    });
}

servicesController.newEntity = async (req, res) => {
    let dataForm = req.body;
    
    mysql.query(`INSERT INTO entitys (${Object.keys(dataForm).join(",")}) 
    VALUES ('${dataForm.name}')`, 
    function (err, result) 
    {
        if (err) {
            res.status(500).json({
                data: null,
                message: {
                    title: "Ocurrion un error inesperado",
                    text: `error ${err}`,
                    icon: "error"
                }
            });
        } else {
            res.status(200).json({
                data: null,
                message: {
                    title: "Entidad agregado con éxito",
                    text: "Se ha agregado con éxito la entidad",
                    icon: "success"
                }
            });
        }
    });
}

servicesController.editEntity = async (req, res) => {
    let dataForm = req.body;
    
    mysql.query(`UPDATE entitys SET name = '${dataForm.name}' WHERE Id = '${dataForm.id}'`, 
    function (err) 
    {
        if (err) {
            res.status(500).json({
                data: null,
                message: {
                    title: "Ocurrion un error inesperado",
                    text: `error ${err}`,
                    icon: "error"
                }
            });
        } else {
            res.status(200).json({
                data: null,
                message: {
                    title: "Entidad editada con éxito",
                    text: "Se ha editado con éxito la entidad",
                    icon: "success"
                }
            });
        }
    });
}

servicesController.deleteEntity = async (req, res) => {
    try {
        let dataForm = req.body;

        validateDataState(dataForm.id)
        .then((responseValidate) => {
            if (responseValidate) {
                updateDataState(dataForm.id)
                .then((responseUpdate) => {
                    res.status(200).json(responseUpdate);
                })
                .catch((error) => { 
                    res.status(500).json(error);
                });
            } else {
                deleteData(dataForm.id)
                .then((responseDelete) => {
                    res.status(200).json(responseDelete);
                })
                .catch((error) => { 
                    res.status(500).json(error);
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                data: null,
                message: {
                    title: "Ocurrion un error inesperado",
                    text: `error ${err}`,
                    icon: "error"
                }
            });
        });
    } 
    catch (error) {
        res.status(500).json({
            data: null,
            message: {
                title: "Ocurrion un error inesperado",
                text: `error ${err}`,
                icon: "error"
            }
        });
    }
}

function validateDataState(id) {
    return new Promise((resolve, reject) => {
         mysql.query(`SELECT * FROM entitys AS et 
                WHERE et.id = ${id}`, 
        //  mysql.query(`SELECT * FROM entitys AS et 
        //         INNER JOIN categories_sub AS cs ON cs.id_category = et.id
        //         WHERE et.id = ${id}`, 
        function (err, result) 
        {
            if (err) {
                return reject(err);
            }
            if (result?.length) {
                return resolve(true);
            } else {
                return resolve(false);
            }
        });
    });
}

function deleteData(id) {
    return new Promise((resolve, reject) => {
        mysql.query(`DELETE FROM entitys WHERE id = ${id}`, 
        function (err, result) 
        {
            if (err) {
                reject({
                    data: null,
                    message: {
                        title: "Ocurrion un error inesperado",
                        text: `error ${err}`,
                        icon: "error"
                    }
                });
            } else {
                resolve({
                        data: null,
                        message: {
                            title: "Categoría elimminada con éxito",
                            text: "Se ha eliminado con éxito la categoría",
                            icon: "success"
                        }
                    }
                );
            }
        });
    });
}

function updateDataState(id) {
    return new Promise((resolve, reject) => {
        mysql.query(`UPDATE entitys SET disable = 1 WHERE id = ${id}`, 
        function (err, result) 
        {
            if (err) {
                reject({
                        data: null,
                        message: {
                            title: "Ocurrion un error inesperado",
                            text: `error ${err}`,
                            icon: "error"
                        }
                    }
                );
            } else {
                resolve({
                        data: null,
                        message: {
                            title: "Entidad eliminada con éxito",
                            text: "Se ha eliminado con éxito la entidad",
                            icon: "success"
                        }
                    }
                );
            }
        });
    });
}

module.exports = servicesController;