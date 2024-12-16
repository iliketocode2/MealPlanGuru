const posts = {
    'post-1': {
      title: 'How to use all of your meal swipes',
      date: '12/16/2024',
      content: 'Guide to using all of your meal swipes',
      author: 'William Goldman',
      imageUrl: 'https://via.placeholder.com/150',
      tags: ['400', 'guide'],
      viewCount: 0,
    },
    'post-2': {
      title: 'The best places to eat on campus',
      date: '12/16/2024',
      content: 'Review of the best places to eat on campus',
      author: 'William Goldman',
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['220', 'review'],
        viewCount: 0,
    },
  };
  
  async function syncPostsWithDatabase() {
    try {
      const response = await fetch('http://localhost:5000/api/tufts/posts');
      const existingPosts = await response.json();
  
      const existingPostIds = new Set(existingPosts.map((post: any) => post.id));
  
      for (const [postId, post] of Object.entries(posts)) {
        if (!existingPostIds.has(postId)) {
          await fetch('http://localhost:5000/api/tufts/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: postId, ...post }),
          });
        }
      }
    } catch (err) {
      console.error('Error syncing posts with database:', err);
    }
  }
  
  syncPostsWithDatabase();
  
  export default posts;