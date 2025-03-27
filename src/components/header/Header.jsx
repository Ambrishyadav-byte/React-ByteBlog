import React, { use } from 'react'
import Container from '../container/Container'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const userStatus = useSelector((state) => state.auth.status)

const navigate = useNavigate()

const navItems =[
  {
    name : 'Home',
    slug : '/'
    active : true
  },
  {
    name : 'login',
    slug : '/login'
    active : !userStatus
  }
  {
    name : 'Signup',
    slug : '/signup'
    active : !userStatus
  }
  {
    name : 'Profile',
    slug : '/profile'
    active : userStatus
  }
  {
    name :'posts',
    slug : '/posts'
    active: authStatus
  }
  {
    name :'all posts',
    slug : '/all-posts'
    active: authStatus
  }
  {
    name :'create post',
    slug : '/create-post'
    active: authStatus
  }
  {
    name :'logout',
    slug : '/logout'
    active: authStatus
  }
]

function Header() {
  return (
    <header className=" py-3 shadow bg-gray-500" >
      <container>
        
      </container>
    </header>
  )
}

export default Header