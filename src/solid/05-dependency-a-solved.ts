import { HttpClient } from "./02-open-close-c";
import { PostService } from "./05-dependency-b-solved";
import {
	JsonDatabaseApi,
	LocalDataBaseService,
} from "./05-dependency-c-solved";
import { JsonDatabaseService } from "./05-dependency-c-solved";

// Main
(async () => {
	//const provider = new JsonDatabaseService();
	// const provider = new LocalDataBaseService();

	const httpClient = new HttpClient();
	const provider = new JsonDatabaseApi(httpClient);

	const postService = new PostService(provider);

	const posts = await postService.getPosts();

	console.log({ posts });
})();
