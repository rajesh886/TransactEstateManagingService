var mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const UserSchema = new mongoose.Schema({
    given_name: {
        type: String,
        //required: true
    },
    family_name: {
        type: String,
    }
});


UserSchema.plugin(findOrCreate)

module.exports = User = mongoose.model('User', UserSchema);