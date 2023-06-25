const router = require('express').Router()
const multer = require('multer');
const upload = multer();


router.get("/testapi" , (req,res) => {
    return res.json({message: "server is up and running"})
})



const readEvent = require('../Handlers/ReadEvent')
const createEvent = require('../Handlers/CreateEvent')
const updateEvent = require('../Handlers/UpdateEvent')
const deleteEvent = require('../Handlers/DeleteEvent') 
// const readAllEvents = require("../Handlers/ReadAllEvents")

// router.get("/event",readAllEvents)
router.get("/events",readEvent)
router.post("/events", upload.single('image'),createEvent)
router.put("/events/:id",upload.single('image'),updateEvent)
router.delete("/events/:id",deleteEvent)

module.exports = router;