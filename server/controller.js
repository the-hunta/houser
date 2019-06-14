module.exports = {
    getProperties: (req, res, next) =>{
        req.app.get('db').get_properties()
        .then((properties) => {
            res.status(200).send(properties)
        }) 
        .catch(err => console.log(err))
        },

        pstProperty: (req, res, next) => {
            let {propertyname, address, city, state, zip, image, morgageamt, desirerent} = req.body
            req.app.get('db').post_property( [propertyname, address, city, state, zip, image, morgageamt, desirerent])
            .then(() => res.status(200))
        },

        deleteProperty: (req, res, next) => {
            req.app.get('db').deleteProperty(req.params.id)
            .then(req.app.get('db').get_properties)
        }

    
}