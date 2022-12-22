import React from 'react'

const UserCard = ({ user, deleteUser, setGetUpdate, handleChangeShowForm }) => {

   const handleChangeClickUpdate = () => {
    setGetUpdate(user)
    handleChangeShowForm()
   }
 
    return (
        <article className='user'>
            <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='user__list'>
                <li className='user__item'><span> <i class='bx bx-envelope' ></i>Email </span>{user.email}</li>
                <li className='user__item'><span> <i class='bx bx-gift'></i> Birthday </span>{user.birthday}</li>
            </ul>
            <div className='user__container--btn'>
                <button className='user__btn' onClick={() => deleteUser(user.id)}>
                    <i className='bx bx-trash'></i>
                </button>
                <button className='user__btn' onClick={handleChangeClickUpdate}>
                    <i className='bx bx-edit' ></i>
                </button>
            </div>
        </article>
    )
}

export default UserCard