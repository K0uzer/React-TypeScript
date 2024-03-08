import { useState } from 'react'
import './App.css'

const faqs = [
    {
        title: 'Where are these chairs assembled 1',
        text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Where are these chairs assembled 2',
        text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
    },
    {
        title: 'Where are these chairs assembled 3',
        text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
    },
]

const Accordion = ({ data }: { data: any }) => {
    const [currentOpen, setCurrentOpen] = useState(null)
    return (
        <div className="accordion">
            {data.map((element: any, index: any) => (
                <Item
                    onOpen={setCurrentOpen}
                    currentOpen={currentOpen}
                    key={index}
                    num={index}
                    title={element.title}
                >
                    {element.text}
                </Item>
            ))}
        </div>
    )
}

const Item = ({
    num,
    title,
    currentOpen,
    onOpen,
    children,
}: {
    num: any
    title: any
    currentOpen: any
    onOpen: any
    children: any
}) => {
    const isOpen = num === currentOpen

    const handleToggle = () => onOpen(isOpen ? null : num)

    return (
        <div
            className={`item ${isOpen ? 'open' : ''}`}
            style={{ userSelect: 'none' }}
            onClick={handleToggle}
        >
            <p className="number">
                {num < 9 ? `0${num + 1}` : num + 1}
            </p>
            <p className="number">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && (
                <div className="content-box">
                    {children}
                </div>
            )}
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Accordion data={faqs} />
        </div>
    )
}

export default App
