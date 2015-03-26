'use strict';

module.exports = function(app, db) {

    app.get('/posts', function(req, res) {
        db.getAll('posts', function(err, data, meta){
            if (err) throw err;
            console.log("post found : "+ app.inspect(data))
        });
    });

    app.get('/posts/:id', function(req, res) {
        res.send(req.params.id);
    });

    app.post('/posts', function(req, res) {
        console.log(req.params.id);
        console.log(req.params.title);
        res.send(req.body);
        /*
           var post = new postmodel({
           'title': req.body.title,
           'text': req.body.text
           });

           post.save(function(err, data){
           if(err)
           return res.status(500).json(err);

           res.json(data);
           res.send(req.params.id);
           });
           */
    });

    app.put('/posts/:id', function(req, res ){
        res.send(req.params.id);
    });

    app.delete('/posts/:id', function(req, res){
        res.send(req.params.id);
    });
}
