import { Fragment } from 'react'
import LoginOrRegister from '../../components/LoginOrRegister'

function index() {
    return (
        <Fragment>
            <LoginOrRegister loginOrRegister='login' />
        </Fragment>
    )
}

export default index