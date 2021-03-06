import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    datepublished: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    alt: { type: String, required: true },
    text: { type: String, required: true }
  }
);

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;