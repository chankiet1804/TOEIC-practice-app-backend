require ('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const white_list = ["/","/register","/login"];
    if(white_list.find(item => '/v1/api'+item === req.originalUrl)){
        return next();
    }
    if(req.headers && req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];

        //verify token
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(">>>check token: ", decoded);
            next();
        } catch (error){
            return res.status(401).json({
                message: "Token bị hết hạn/ không hợp lệ"
            });
        }
        
    }
    else{
        //return exception
        return res.status(401).json({
            message: "Bạn chưa truyền token/ token bị hết hạn"
        });
    }

}

module.exports = auth; //export default