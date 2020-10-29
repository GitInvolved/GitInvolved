import mongoose from 'mongoose';

const { Schema } = mongoose;

const applicationUserSchema = new Schema ({
  userName: {type: String, required: true},
  starred: {type: Array, required: true},
  categories: {type: Array, required: true},
  userRepos: {type: Array, required: true}
});


export default mongoose.model('User', applicationUserSchema);







