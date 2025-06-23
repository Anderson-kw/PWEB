module.exports = function(application){
    application.get('/admin/adicionar_usuarios', function(req,res){
        res.render('admin/adicionar_usuarios');
     });
}