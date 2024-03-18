export type SelectedFriend = {
    id: number
    name: string
    image: string
    balance: number
}

export type FriendListProps = {
    friends: SelectedFriend[]
    isSelectedSplitForm: boolean
    selectedFriend: SelectedFriend | null
    setIsSelectedSplitForm: any
    setSelectedFiend: any
}

export type FriendProps = {
    item: SelectedFriend
    isSelectedSplitForm: boolean
    selectedFriend: SelectedFriend | null
    setIsSelectedSplitForm: any
    setSelectedFiend: any
}

export type SplitBillProps = {
    friends: SelectedFriend[]
    selectedFriend: SelectedFriend
    setFriends: any
    setSelectedFiend: any
}

export type NewFriendProps = {
    friends: SelectedFriend[]
    isOpenNewFriend: boolean
    setFriends: any
    setIsOpenNewFriend: any
}
