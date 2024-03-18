import { FriendListProps } from '../Types/Types'
import Friend from './Friend'

const FriendList = ({
    friends,
    isSelectedSplitForm,
    setIsSelectedSplitForm,
    selectedFriend,
    setSelectedFiend,
}: FriendListProps) => {
    return (
        <ul>
            {friends.map((item: any) => (
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
