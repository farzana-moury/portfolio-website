import MotionHoc from "../higher order components/MotionHoc"
import PortfolioList from "./portfolioList"
import "./portfolio.scss"
import { useEffect, useState } from "react"
import { all, apps, games, websites, other } from "./data"
import Modal from "../modal/Modal"


const Portfolio = () => {
    //state variables
    const [selected, setSelected] = useState("all")
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [index, setIndex] = useState(0)

    const openModal = () => {
        setShowModal(prev => !prev)
    };

    const list = [
        {
            id: "all",
            title: "A L L"
        },
        {
            id: "apps",
            title: "A P P S"
        },
        {
            id: "games",
            title: "G A M E S"
        },
        {
            id: "websites",
            title: "W E B S I T E S"
        },
        {
            id: "other",
            title: "O T H E R"
        }
        
    ];

    useEffect(() => {
        switch (selected) {
            case "all":
                setData(all)
                break
            case "apps":
                setData(apps)
                break;
            case "games":
                setData(games)
                break
            case "websites":
                setData(websites)
                break
            case "other":
                setData(other)
                break
            default:
                setData(all)
        }

    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d, key) => (

                    <div onClick={openModal} className="item">
                        <img onClick={() => setIndex(key)}
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}

                <Modal showModal={showModal} setShowModal={setShowModal} listItem={data[index]}/>
            </div>

        </div>
    )
};

const PortfolioComponent = MotionHoc(Portfolio)

export default PortfolioComponent