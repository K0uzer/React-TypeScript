import { Friend as FriendItem } from '../Types/Types'
import Friend from './Friend'

type FriendListProps = {
    friends: FriendItem[]
    isSelectedSplitForm: boolean
    selectedFriend: FriendItem | null
    setIsSelectedSplitForm: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedFiend: React.Dispatch<React.SetStateAction<FriendItem | null>>
}

const FriendList = ({
    friends,
    isSelectedSplitForm,
    setIsSelectedSplitForm,
    selectedFriend,
    setSelectedFiend,
}: FriendListProps) => {
    return (
        <ul>
            {friends.map((item: FriendItem) => (
                <Friend
                    key={item.id}
                    item={item}
                    isSelectedSplitForm={isSelectedSplitForm}
                    setIsSelectedSplitForm={setIsSelectedSplitForm}
                    setSelectedFiend={setSelectedFiend}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    )
}

export default FriendList
