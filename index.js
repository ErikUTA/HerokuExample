const conexion = require('./conexion');
const express = require('express'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    config = require('./configs/config');
    app = express();



const router = express.Router();
const cors =  require('cors');
const PORT = process.env.PORT || 8080;


//app.set('key', config.key);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', router);

// const swaggerUi = require('swagger-ui-express');
// const { request } = require('express');
// swaggerDocument = require('./swager.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use((req, res, next) => {    
    next();
})

// app.get ('/', function (req, res) {
//     res.send ('Home');
// });
// app.post ('/autenticar', (req, res) => {
//     if (req.body.usuario === "Erik" && req.body.contrasena === "key") {
//   const payload = {
//    check: true
//   };
//   const token = jwt.sign (payload, app.get ("key"), {
//    expiresIn: 1440
//   });
//   res.json ({
//    mensaje: "Autenticación correcta",
//    token: token
//   });
//     } else {
//         res .json ({mensaje: "Usuario o contraseña incorrecto"})
//     }
// });

// const routesProtect = express.Router ();

// routesProtect.use ((req, res, next) => {
//     const token = req.headers ["access-token"];
//     if (token) {
//       jwt.verify (token, app.get ('key'), (err , decoded) => {
//         if (err) {
//           return res.json ({mensaje: 'Token no valido'});
//         } else {
//           req.decoded = decoded;
//           next ();
//         }
//       });
//     } else {
//       res.send ( {
//           mensaje: 'Token no trajo datos.'
//       });
//     }
// });
// app.get('/data', routesProtect, (req, res) => {
//     id = req.params.id;
//     const datos = [
//      { id: 0, nombre: "User 0" },
//      { id: 1, nombre: "User 1" },
//      { id: 2, nombre: "User 2" },
//      { id: 3, nombre: "User 3" },
//      { id: 4, nombre: "User 4" }
//     ];
//     res.json(datos);
// });

app.listen(
    PORT, 
    () => console.log(`it's running on http:localhost:${PORT}`)
);

// router.route(`/changeStates/:id?=${}`).put((req, res) => {
//     const id = req.params.id;
//     conexion.query("UPDATE states SET ? WHERE Id = ?", [req.body, Number.parseInt(id)], (err, result, fields) => {
//         if(!err){
//             res.json(result);
//         }else{
//             console.log(err);
//         }
//     }); 
// });


/*router.route('/states').get((req, res) => {
    conexion.query("SELECT * FROM states", (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    });
});

router.route('/newStates').post((req, res) => {
    conexion.query("INSERT INTO states SET ?", req.body, (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    }); 
});


router.route('/deleteStates/:id').delete((req, res) => {
    const id = req.params.id;
    conexion.query("DELETE FROM states WHERE Id = ?", Number.parseInt(id), (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    }); 
});*/

router.route('/data/:id').get((req, res) => {
    const id = req.params.id;
    conexion.query(`SELECT * FROM node.states WHERE Id = ${id}`, (err, result) => {
        if(!err){
            res.json(result);
            console.log(result);
        }else{
            console.log(err);
        }
    });
});
