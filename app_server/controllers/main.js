/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'food recipe website' });
    };
    module.exports = {
        index
        };