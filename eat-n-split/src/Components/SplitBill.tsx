import React, { useState } from 'react'
import { Friend } from '../Types/Types'

type SplitBillProps = {
    friends: Friend[]
    selectedFriend: Friend
    setFriends: React.Dispatch<React.SetStateAction<Friend[]>>
    setSelectedFiend: React.Dispatch<React.SetStateAction<Friend | null>>
}

const SplitBill = ({
    setFriends,
    selectedFriend,
    setSelectedFiend,
}: SplitBillProps) => {
    const [cheque, setCheque] = useState(0)
    const [myPart, setMyPart] = useState(0)
    const [isPaying, setIsPaying] = useState('Ты')

    const friendPart = cheque - myPart

    const handleSplitCheque = (value: any) => {
        setFriends((friends: any) =>
            friends.map((friend: any) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend,
            ),
        )
        setSelectedFiend(null)
    }

    const issueChanges = (event: any) => {
        event.preventDefault()
        if (!cheque || !myPart) return
        handleSplitCheque(isPaying === 'Ты' ? friendPart : -myPart)
    }

    return (
        <form
            onSubmit={issueChanges}
            className="form-split-bill"
            style={{
                display: 'block',
                marginBottom: '5px',
            }}
        >
            <h2>Разделить счет с {selectedFriend.name}</h2>
            <div>
                <p>🧩Счёт</p>
                <input
                    type="text"
                    value={cheque}
                    onChange={(event) => setCheque(+event.target.value)}
                />
            </div>
            <div>
                <p>🗯️Моя часть</p>
                <input
                    type="text"
                    value={myPart}
                    onChange={(event) => setMyPart(+event.target.value)}
                />
            </div>
            <div>
                <p>😅Часть {selectedFriend.name}</p>
                <input type="text" value={friendPart} disabled />
            </div>
            <div>
                <p>🙍🏻‍♂️Кто платит?</p>
                <select onChange={(event) => setIsPaying(event.target.value)}>
                    <option value="Ты">Ты</option>
                    <option value="Твой друг">{selectedFriend.name}</option>
                </select>
            </div>
            <button type="submit" className="button">
                Рассчитать
            </button>
        </form>
    )
}

export default SplitBill
