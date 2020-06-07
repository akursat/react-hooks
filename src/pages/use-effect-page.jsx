import React, { useState, useEffect } from 'react'
import { RedditTile } from '~components/reddit'
import { Select } from '~components/select'

const HOST = 'https://www.reddit.com/r'
const TURKEY_URL = `${HOST}/turkey.json`
const REACT_URL = `${HOST}/reactjs.json`
const VUE_URL = `${HOST}/vuejs.json`

function UseEffectPage() {
    const [subreddit, setSubReddit] = useState(TURKEY_URL)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(subreddit)
            const json = await res.json()
            setPosts(json.data.children.map((c) => c.data))
        }
        fetchData()
    }, [subreddit, setPosts])

    return (
        <div>
            <h1>useEffect Hook</h1>
            <label>Subreddit seç: </label>
            <Select onChange={(e) => setSubReddit(e.target.value)}>
                <option value={TURKEY_URL}>r/turkey</option>
                <option value={REACT_URL}>r/react.js</option>
                <option value={VUE_URL}>r/vue.js</option>
            </Select>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <RedditTile src="https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png"></RedditTile>
        </div>
    )
}

export default UseEffectPage
