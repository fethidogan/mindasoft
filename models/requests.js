import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true },
    message: { type: String, required: true },
  }
);

const Request = mongoose.models.Request || mongoose.model('Request', requestSchema);
export default Request;