import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValue = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}


const FormUsers = ({ createUser, getUpdate, updateUser,isShowForm, handleChangeShowForm }) => {

    const { handleSubmit, register, reset } = useForm()

    const submitForm = (data) => {
        if (getUpdate) {
            updateUser(getUpdate.id, data)
        } else {
            createUser(data)
        }
        reset(defaultValue)
    }

    const titleForm = getUpdate ? "Edit user" : "New user"
    const textButton = getUpdate ? "Edit user" : "Add new user"

    useEffect(() => {
        if (getUpdate) {
            reset(getUpdate)
        } else {
            reset(defaultValue)
        }
    }, [getUpdate])


    return (
        <div className={`container__form ${isShowForm ?  "" : "disable-form"}`}>
            <form className='form__user' onSubmit={handleSubmit(submitForm)}>
                <i onClick={handleChangeShowForm} className='bx bx-x-circle'></i>
                <h2 className='form__title'>{titleForm}</h2>
                <div className='form__element'>
                    <label className='form__label' htmlFor="">Email</label>
                    <input className='form__input' placeholder='Enter your email' type="email"  {...register("email")} />
                </div>
                <div className='form__element'>
                    <label className='form__label' htmlFor="">Password</label>
                    <input className='form__input' placeholder='Enter your password' type="password"  {...register("password")} />
                </div>
                <div className='form__element'>
                    <label className='form__label' htmlFor="">First Name</label>
                    <input className='form__input' placeholder='Enter your first name' type="text"  {...register("first_name")} />
                </div>
                <div className='form__element'>
                    <label className='form__label' htmlFor="">Last Name</label>
                    <input className='form__input' placeholder='Enter your last name' type="text"  {...register("last_name")} />
                </div>
                <div className='form__element'>
                    <label className='form__label' htmlFor="">Birthday</label>
                    <input className='form__input' type="date"  {...register("birthday")} />
                </div>
                <button className='form__btn'>{textButton}</button>
            </form>
        </div>
    )
}

export default FormUsers