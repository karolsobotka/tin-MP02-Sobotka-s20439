const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');
const authUtil = require('../util/authUtils');

exports. login = (req, res, next) => {
        const login = req.body.login;
        const password = req.body.password;
        EmployeeRepository.findByLogin(login)
        .then( emp => {
            if(!emp) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy login lub hasło."
                })
            } else if (authUtil.comparePassword(password, emp.password)===true) {
                req.session.loggedUser = emp;
                res.redirect('/');
            }else {
                res.render('index', {
                    navLocation: '',
                    LoginError: "Nieprawidłowy login lub hasło."
            })
        }
    }).catch(err => {
        console.log(err)
    });
}

exports.logout = (req, res,next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}

