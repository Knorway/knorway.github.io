import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const slugs = fs.readdirSync('posts').map((dir) => dir.replace('.md', ''));

export const getAllPosts = () => {
	const postList = slugs.map((slug) => {
		const file = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf8');
		const mattered = matter(file);
		return {
			...mattered.data,
			slug,
		};
	});

	return postList;
};
