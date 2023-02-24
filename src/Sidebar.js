import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return (
      <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
      </div>
    )
  }

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbG9yZnVsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="colorful-background"
        />
        <Avatar className='sidebar__avatar' src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,234</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">5,434</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('programming')}
        {recentItem('C++')}
        {recentItem('JavaScript')}
        {recentItem('NodeJs')}
      </div>
    </div>
  )
}

export default Sidebar
