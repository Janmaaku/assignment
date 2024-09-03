document.addEventListener("DOMContentLoaded", () => {
	const postsContainer = document.getElementById("posts-container");
	const mainTag = document.querySelector("main");
	const sectionTag = document.querySelector(".scrollable-section");

  // Set the height of the section tag to be the same as the main tag
	function setSectionHeight() {
		const mainHeight = mainTag.clientHeight;
		sectionTag.style.height = `${mainHeight}px`;
}

// Call the function initially and on window resize
setSectionHeight();
window.addEventListener("resize", setSectionHeight);


	// Sample post data
	const posts = [
		{
			author: "John Doe",
			content: "Just had an amazing day at the beach! 🏖️",
			likes: 15,
			comments: 3,
			shares: 2,
		},
		{
			author: "Jane Smith",
			content: "Check out this delicious meal I cooked! 🍝",
			likes: 32,
			comments: 8,
			shares: 5,
		},
		{
			author: "Mike Johnson",
			content: "Excited to announce my new job! 🎉",
			likes: 45,
			comments: 12,
			shares: 7,
		},
		{
			author: "Mike Johnson",
			content: "Excited to announce my new job! 🎉",
			likes: 45,
			comments: 12,
			shares: 7,
		},
		{
			author: "Mike Johnson",
			content: "Excited to announce my new job! 🎉",
			likes: 45,
			comments: 12,
			shares: 7,
		},
		{
			author: "Mike Johnson",
			content: "Excited to announce my new job! 🎉",
			likes: 45,
			comments: 12,
			shares: 7,
		},
		{
			author: "Alice Brown",
			content: '<img src="./assets/images.jpeg" alt="Sample Image" class="w-full h-full rounded rounded-md">',
			likes: 20,
			comments: 5,
			shares: 3,
		},
	];

	// Add console log to check if posts list is working
	console.log("Posts list:", posts);

	function createPostElement(post) {
		const postElement = document.createElement("div");
		postElement.className = "bg-white p-4 rounded-lg shadow mb-4 shadow-md border border-gray-100";
		postElement.innerHTML = `
        <div class="flex items-center mb-2">
            <div class="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
            <span class="font-semibold">${post.author}</span>
        </div>
        <p class="mb-4">${post.content}</p>
        <div class="flex justify-between text-gray-500">
            <span class="flex gap-2 items-center cursor-pointer like-button">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 like-icon">
  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
</svg>
 ${post.likes}</span>
            <span class="flex gap-2 items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
</svg>
 ${post.comments}</span>
            <span class="flex gap-2 items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
</svg>
 ${post.shares}</span>
        </div>
    `;
		// Add event listener for like button
		const likeButton = postElement.querySelector(".like-button");
		let liked = false;
		likeButton.addEventListener("click", () => {
			if (!liked) {
				post.likes += 1;
				likeButton.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 like-icon text-blue-500">
						<path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
					</svg>
					${post.likes}
				`;
			} else {
				post.likes -= 1;
				likeButton.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 like-icon">
						<path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
					</svg>
					${post.likes}
				`;
			}
			liked = !liked;
		});
		return postElement;
	}

	// Display initial posts
	posts.forEach((post) => {
		const postElement = createPostElement(post);
		postsContainer.appendChild(postElement);
	});

	// Add console log to confirm posts are displayed
	console.log("Initial posts displayed:", postsContainer.children.length);

	// Implement infinite scrolling
	let loading = false;
	postsContainer.addEventListener("scroll", () => {
		if (loading) return;
		if (
			postsContainer.scrollTop + postsContainer.clientHeight >=
			postsContainer.scrollHeight - 20
		) {
			loading = true;
			// Simulate loading more posts
			setTimeout(() => {
				for (let i = 0; i < 3; i++) {
					const newPost = {
						author: `User ${Math.floor(Math.random() * 100)}`,
						content: "This is a newly loaded post.",
						likes: Math.floor(Math.random() * 50),
						comments: Math.floor(Math.random() * 10),
						shares: Math.floor(Math.random() * 5),
					};
					postsContainer.appendChild(createPostElement(newPost));
				}
				loading = false;
				// Add console log to confirm new posts are loaded
				console.log(
					"New posts loaded. Total posts:",
					postsContainer.children.length
				);
			}, 1000);
		}
	});
});
