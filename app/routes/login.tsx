import React from 'react'
import Layout from '~/components/layout'
const Login = () => {
    return (
        <Layout>
            <div className="h-full justify-center items-center flex flex-col gap-y-4">
                <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to Kudos!</h2>
                <p className="font-semibold text-slate-300">Log In To Give Some Praise!</p>
            </div>
        </Layout>
    )
}

export default Login