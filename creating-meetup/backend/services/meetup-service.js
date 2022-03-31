const BaseService = require('./base-service')
const MeetupModel = require('../models/meetup')

class MeetupService extends BaseService {
    model = MeetupModel

    
    
}

module.exports = new MeetupService()

// const BaseService = require('./base-service')
// const MeetupModel = require('../models/meetup')

// class MeetupService extends BaseService {
//     constructor() {
//         super(MeetupModel, `${__dirname}/../meetup-database.json`)
//     }
// }

// module.exports = new MeetupService()