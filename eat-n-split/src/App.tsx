import { useState } from 'react'
import FriendList from './Components/FriendList'
import NewFriend from './Components/NewFriend'
import { initialFriends } from './initialFriend'
import SplitBill from './Components/SplitBill'
import { SelectedFriend } from './Types/Types'

export function App() {
    const [isOpenNewFriend, setIsOpenNewFriend] = useState<boolean>(false)
    const [isSelectedSplitForm, setIsSelectedSplitForm] =
        useState<boolean>(false)
    const [selectedFriend, setSelectedFiend] = useState<SelectedFriend | null>(
        null,
    )
    const [friends, setFriends] = useState<SelectedFriend[]>(initialFriends)

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
