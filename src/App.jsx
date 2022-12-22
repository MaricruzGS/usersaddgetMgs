import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './componets/FormUsers'
import UserCard from './componets/UserCard'

const baseURL = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState()
  const [getUpdate, setGetUpdate] = useState()
  const [isShowForm, setIsShowForm] = useState(false)

  const getAllUser = () => {
    const URL = `${baseURL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createUser = (data) => {
    const URL = `${baseURL}users/`
    axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUser()
      handleChangeShowForm()
    })
    .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${baseURL}users/${id}/`
    axios.delete(URL)
    .then(res => {
      console.log(res.data)
      getAllUser()
    })
    .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${baseURL}users/${id}/`
    axios.patch(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUser()
      setGetUpdate()
      handleChangeShowForm()
    })
    .catch(err => console.log(err))
  }

  const handleChangeShowForm = () => {
    setIsShowForm(!isShowForm)
  }

  const handleClickNewUser = () => {
    handleChangeShowForm()
    setGetUpdate()
  }

  useEffect(() => {
    getAllUser()
  }, [])


  return (
    <div className="App">
     <div className='hearder--container'>
     <h1 className='header__title'> <i class='bx bx-user' ></i>User registration</h1>
     <button className='header__btn' onClick={handleClickNewUser}><i className='bx bx-plus'></i> Create new user</button>
     </div>
    <FormUsers
      createUser ={createUser}
      getUpdate={getUpdate}
      updateUser={updateUser}
      isShowForm={isShowForm}
      handleChangeShowForm={handleChangeShowForm}
      />
     <div className='users--container'>
     {
        users?.map(user => (
          <UserCard 
          key={user.id} 
          user={user}
          deleteUser={deleteUser}
          setGetUpdate={setGetUpdate}
          handleChangeShowForm={handleChangeShowForm}
          />
        ))
      }
     </div>
    </div>
  )
}

export default App
