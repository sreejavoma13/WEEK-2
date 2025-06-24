import mongoose from "mongoose"
const vibeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
    vibeText: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
const Vibe=mongoose.model('Vibe',vibeSchema);
export default Vibe;

