//let dbConnection = require('../config/dbConnection');

module.exports = function(app){
    app.get('/informacao/professores/detalhaprofessor', function(req,res){

       async function getProfessoresID() {
           try {
               let connection = app.config.dbConnection;
               const pool = await connection();

               let professoresModel = app.models.professorModel;

               professoresModel.getProfessor(pool, function(error, results){
                  res.render('informacao/professores/detalhaprofessor',{profs: results.recordset})
               });

            } catch (err) {
                console.log(err)
           }
        }
       getProfessoresID();
    });
 }