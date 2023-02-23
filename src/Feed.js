import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InputOption from './InputOption'
import Post from './Post';
import { db } from './firebase';
import { collection, query, getDocs, addDoc, serverTimestamp, orderBy } from 'firebase/firestore/lite';

function Feed() {

  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(db)
  }, [])

  const getPosts = async (db) => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    setPosts(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))
    )
  }


  const sendPosts = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: 'Dan Hung',
      description: "This is a test for now",
      message: input,
      photoUrl: '',
      timestamp: serverTimestamp(),
    })

    getPosts(db)
    setInput("")
  }

  return (
    <div className='feed'>

      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button onClick={sendPosts} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={PhotoIcon}
            title="Photo"
            color="SteelBlue"
          />
          <InputOption
            Icon={YouTubeIcon}
            title="Video"
            color="green"
          />
          <InputOption
            Icon={EventNoteIcon}
            title="Event"
            color="orange"
          />
          <InputOption
            Icon={AssignmentIcon}
            title="Write Article"
            color="OrangeRed"
          />
        </div>
      </div>

      {/* Post */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        )

      })}

    </div>
  )
}

export default Feed
