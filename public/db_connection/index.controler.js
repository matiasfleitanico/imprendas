const controller = {};
const connection = require('./connection')

controller.index = async (req, res) => {
    try{
        const title  = 'INDEX DESDE EL SERVIDOR Y PUG DESDE UNA VARIABLE';
        await connection();
        console.log('CONNECTION OK')
        res.render ('index', {title})
    } catch(err){
        console.error(err)
    }
};

