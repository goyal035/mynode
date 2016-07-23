var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var UserSchema = new Schema({
    id        : ObjectId,
    title     : { type: String, required: true, enum: ['Mr', 'Mrs', 'Mme', 'Miss'] },
    lastname  : { type: String, required: true, uppercase: true, trim: true},
    firstname : { type: String, required: true},
    mail      : { type: String, required: true, trim: true, index: { unique: true, sparse: true } },
    date      : Date
});

module.exports = mongoose.model('Users', UserSchema);