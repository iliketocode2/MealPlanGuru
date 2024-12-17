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
      date: '12/15/2024',
      content: 'Review of the best places to eat on campus',
      author: 'William Goldman',
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['220', 'review'],
        viewCount: 0,
    },
    'post-3': {
      title: 'Another banger review',
      date: '12/13/2024',
      content: 'Review of something else',
      author: 'William Goldman',
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['100', 'review'],
        viewCount: 0,
    },
    'post-4': {
      title: 'News article',
      date: '12/17/2024',
      content: 'Dewick is terrible!!',
      author: 'William Goldman',
        imageUrl: 'https://via.placeholder.com/150',
        tags: ['400', 'news'],
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