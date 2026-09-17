

const getApi = async() =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        return res.json()
    } catch (error) {
        throw new Error("Failed to fetch posts")
    }
}

const PostsPage = async() => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await res.json()

    const data = await getApi()

  return (
    <div>PostsPage: {data.length}</div>
  )
}

export default PostsPage