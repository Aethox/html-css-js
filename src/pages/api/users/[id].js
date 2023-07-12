const handler = (req, res) => {
    switch (req.method) {
        case 'GET':
            console.log(req.query)
            res.status(200).json({
                message: 'hola'
            })
            break;
    
        default:
            break;
    }
}