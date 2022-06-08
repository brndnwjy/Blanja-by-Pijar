import axios from 'axios'

const userLogin = (dataForm, navigate) => async(dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post('http://localhost:4000/v1/user/login', dataForm)
        const user = result.data.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('refreshToken', user.refreshToken)
        console.log(user)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

export default userLogin