import React, { useContext, useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { userContext } from '../context/UserContextProvider'
import axios from 'axios';
function Chat() {
    const user = useContext(userContext)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const logoutHandler = async () => {
        await auth.signOut();
        navigate('/')
    }
    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()
        return new File([data], "userProfile.jpg", { type: "image/jpeg" })
    }
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "c74eb0c7-c91d-4bb2-b979-5d0eb8441d0d",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
            .then(() => setLoading(false))
            .catch(() => {
                let formData = new FormData();
                formData.append("email", user.email)
                formData.append("username", user.email)
                formData.append("secret", user.uid)
                getFile(user.photoURL).then(avatar => {
                    formData.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formData, {
                        "headers": {
                            "private-key": "0e2beb99-f55d-4828-b19b-e6e7a1d4aefa"
                        }
                    })
                        .then(() => setLoading(false))
                        .catch(error => console.log(error))
                })
            })
    }, [user, navigate])
    if (!user || loading) return "loading..."
    return (
        <div>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine
                height="calc(100vh-50px)"
                projectID="c74eb0c7-c91d-4bb2-b979-5d0eb8441d0d"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default Chat
