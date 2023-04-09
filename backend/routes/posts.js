import express from 'express';
import { getPosts } from '../controllers/posts.js';

const route = express.Router();

route.get('/', getPosts);

export default route;