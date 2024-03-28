import React, { useState } from 'react'
import { Friend } from '../Types/Types'

type NewFriendProps = {
    friends: Friend[]
    isOpenNewFriend: boolean
    setFriends: React.Dispatch<React.SetStateAction<Friend[]>>
    setIsOpenNewFriend: React.Dispatch<React.SetStateAction<boolean>>
}

const NewFriend = ({
    setFriends,
    friends,
    isOpenNewFriend,
    setIsOpenNewFriend,
}: NewFriendProps) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('https://i.pravatar.cc/48')

    const addFriend = (event: any) => {
        event.preventDefault()
        if (!name || !image) return
        const id = new Date().getTime()
        setFriends([
            ...friends,
            {
                id: id,
                name: name,
                image: `${image}?u=${id}`,
                balance: 0,
            },
        ])
        setName('')
        setImage('')
        setIsOpenNewFriend(false)
    }
    return (
        <>
            {isOpenNewFriend && (
                <form className="form-add-friend">
                    <div>
                        <label>🙍🏻‍♂️ Имя друга </label>
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>😎 Ссылка(URL) на фото </label>
                        <input
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                            type="text"
                        />
                        <button
                            className="button"
                            onClick={(event) => addFriend(event)}
                        >
                            Добавить
                        </button>
                    </div>
                </form>
            )}

            <button
                style={{
                    position: 'absolute',
                }}
                className="button"
                onClick={() => setIsOpenNewFriend(!isOpenNewFriend)}
            >
                {isOpenNewFriend ? 'Закрыть' : 'Добавить друга'}
            </button>
        </>
    )
}

export default NewFriend
