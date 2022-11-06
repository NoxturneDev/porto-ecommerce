import { Fragment } from 'react';
import LoginOrRegister from '../../components/LoginOrRegister'

const register = () => {
    return (
        <Fragment>
            <LoginOrRegister loginOrRegister='register' />
        </Fragment>
    )
}

export default register