import { useState } from 'react'
import FriendList from './Components/FriendList'
import NewFriend from './Components/NewFriend'
import { initialFriends } from './initialFriend'
import SplitBill from './Components/SplitBill'
import { Friend } from './Types/Types'

export function App() {
    const [isOpenNewFriend, setIsOpenNewFriend] = useState(false)
    const [isSelectedSplitForm, setIsSelectedSplitForm] = useState(false)
    const [selectedFriend, setSelectedFiend] = useState<Friend | null>(null)
    const [friends, setFriends] = useState<Friend[]>(initialFriends)

    return (
        <div className="App">
            <div className="sidebar">
                <h1>Раздели счет с другом</h1>
                <FriendList
                    friends={friends}
                    isSelectedSplitForm={isSelectedSplitForm}
                    setIsSelectedSplitForm={setIsSelectedSplitForm}
                    setSelectedFiend={setSelectedFiend}
                    selectedFriend={selectedFriend}
                />
                {selectedFriend && (
                    <SplitBill
                        friends={friends}
                        setFriends={setFriends}
                        selectedFriend={selectedFriend}
                        setSelectedFiend={setSelectedFiend}
                        key={selectedFriend.id}
                    />
                )}
                <NewFriend
                    friends={friends}
                    setFriends={setFriends}
                    isOpenNewFriend={isOpenNewFriend}
                    setIsOpenNewFriend={setIsOpenNewFriend}
                />
            </div>
        </div>
    )
}

export default App
