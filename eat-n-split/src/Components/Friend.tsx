import { Friend as FriendItem } from '../Types/Types'

type FriendProps = {
    item: FriendItem
    isSelectedSplitForm: boolean
    selectedFriend: FriendItem | null
    setIsSelectedSplitForm: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedFiend: React.Dispatch<React.SetStateAction<FriendItem | null>>
}

const Friend = ({
    item,
    isSelectedSplitForm,
    setIsSelectedSplitForm,
    setSelectedFiend,
    selectedFriend,
}: FriendProps) => {
    const isSelected = selectedFriend?.id === item.id
    const toggleSplitForm = () => {
        setIsSelectedSplitForm((isForm: any) => !isForm)
        isSelected && setSelectedFiend(null)
    }
    return (
        <li
            key={item.id}
            className={isSelected && isSelectedSplitForm ? 'selected' : ''}
            onClick={() => toggleSplitForm()}
        >
            <img src={item.image} alt="img" />
            <div>
                <strong>
                    <p>{item.name}</p>
                </strong>
                <p
                    className={
                        item.balance > 0
                            ? 'green'
                            : item.balance !== 0
                            ? 'red'
                            : ''
                    }
                >
                    {item.balance !== 0
                        ? item.balance + '$'
                        : 'Никто никому не должен'}
                </p>
            </div>
            <button
                onClick={() => setSelectedFiend((cur: any) => item)}
                className="button"
                type="submit"
            >
                {isSelected && isSelectedSplitForm ? 'Закрыть' : 'Открыть'}
            </button>
        </li>
    )
}

export default Friend
