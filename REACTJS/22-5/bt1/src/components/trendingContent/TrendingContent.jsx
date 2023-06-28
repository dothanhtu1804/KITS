import styled from "styled-components"
import monkey1 from "../../assets/monkey1.svg"
import trending_account_1 from "../../assets/trending_account_1.svg"
import trending_account_2 from "../../assets/trending_account_2.svg"
import diamondblack from "../../assets/diamonblack.svg"
import monkey2 from "../../assets/monkey2.svg"
import { CardTrending } from "components/Card"
// import monkey3 from "../asset/monkey3.svg"
// import monkey4 from "../asset/monkey4.svg"

const trending_data = [
    {
        imgPic: monkey1,
        name_imgTrend: "Ape In Love",
        eval_img: "21,5K Likes",
        imgAccount: trending_account_1,
        name_account: "@johnti60",
        nameBottom:"Current Bid",
        imgBottom: diamondblack,
        number: "9.10",
        brand: "ETH"
    },

    {
        imgPic: monkey2,
        name_imgTrend: "Smilling Ape",
        eval_img: "21,5K Likes",
        imgAccount: trending_account_2,
        name_account: "@m_alisson",
        nameBottom:"Current Bid",
        imgBottom: diamondblack,
        number: "6.12",
        brand: "ETH"
    },

    {
        imgPic: monkey2,
        name_imgTrend: "Smilling Ape",
        eval_img: "21,5K Likes",
        imgAccount: trending_account_2,
        name_account: "@m_alisson",
        nameBottom:"Current Bid",
        imgBottom: diamondblack,
        number: "6.12",
        brand: "ETH"
    },

    {
        imgPic: monkey2,
        name_imgTrend: "Smilling Ape",
        eval_img: "21,5K Likes",
        imgAccount: trending_account_2,
        name_account: "@m_alisson",
        nameBottom:"Current Bid",
        imgBottom: diamondblack,
        number: "6.12",
        brand: "ETH"
    }
]


const TrendingLeftBottomStyled= styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    gap: 40px;
`


const TrendingContent = () => {

    const listItems = trending_data.map(
        (element) => {
            return (
                // <ContentTrending__LeftBottom>
                    <CardTrending imgPic={element.imgPic} name_imgTrend={element.name_imgTrend} imgAccount={element.imgAccount} eval_img={element.eval_img} name_account={element.name_account}
                     nameBottom={element.nameBottom} imgBottom={element.imgBottom} number= {element.number} brand={element.brand}></CardTrending>
                    
                // </ContentTrending__LeftBottom>
                )
        }
    )
    // console.log({listItems});
    return <TrendingLeftBottomStyled>
        {listItems}
    </TrendingLeftBottomStyled>
    
}

export default TrendingContent;