<<<<<<< HEAD
const validadeTitle = (req, res, next) => {
    const { body } = req;

    if ( body.title == undefined) {
        return res.status(400).json({message: 'The field "title" is required'});
    };

    if ( body.title == '') {
        return res.status(400).json({message: 'title cannot be empty'});
    };

    next()

};

const validadeStatus = (req, res, next) => {
    const { body } = req;

    if ( body.status == undefined) {
        return res.status(400).json({message: 'The field "title" is required'});
    };

    if ( body.status == '') {
        return res.status(400).json({message: 'title cannot be empty'});
    };

    next()

};

module.exports = {
    validadeTitle,
    validadeStatus,
};
=======
const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: 'The field "title" is required' });
    }

    if (body.title === '') {
        return response.status(400).json({ message: 'title cannot be empty' });
    }

    next();
};

const validateFieldStatus = (request, response, next) => {
    const { body } = request;

    if (body.status === undefined) {
        return response.status(400).json({ message: 'The field "status" is required' });
    }

    if (body.status === '') {
        return response.status(400).json({ message: 'status cannot be empty' });
    }

    next();
};

module.exports = {
    validateFieldStatus,
    validateFieldTitle,
};
>>>>>>> 9208a473711cc1055da15ea65e655e7facbcf537
