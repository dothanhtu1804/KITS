import styled from "styled-components";

const TrendingStyled = styled.div`
    width: 450px;
    height: 425px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 10px;

    .Trending_Name{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .SpanName__Left{
            color: #27262E;
            font-size: 24px;
            font-weight: bold;
        }
        
        .SpanName__Right{
            font-size: 16px;
            color: #747475;
            line-height: 40px;
        }

        .SpanBottom__Left{
            color: #747475;
            font-size: 16px;
            font-weight: bold;
        }
        
        .DivBottom__Right{
            display: flex;
            width: 91px;
            justify-content: space-between;

            
            .DivBottom__RightSpanLeft{
                text-align: left;
                color:#27262E;
                font-weight: bold;
                font-size: 16px;
            }

            .DivBottom__RightSpanRight{
                text-align: right;
                color:#747475;
                font-size: 16px;
            }
            
        }
    }

    .Trending_AccountName{
        margin-top: 20px;
        display: flex;

        img{
            margin-right: 8px;
        }

        .span__Account{
            font-size: 16px;
            color: #747475;
            line-height: 30px;
        }
    }
`

const CardTrending = ({imgPic, imgAccount, name_account, name_imgTrend, eval_img, nameBottom, imgBottom, number, brand}) =>{
    return <TrendingStyled>
        <img src={imgPic} alt="MonkeyDLuffy"></img>
        <div className="Trending_Name">
            <span className="SpanName__Left">
                {name_imgTrend}
            </span>
            <span className="SpanName__Right">
                {eval_img}
            </span>
        </div>

        <div className="Trending_AccountName">
            <img src={imgAccount} alt="account"></img>
            <span className="span__Account">{name_account}</span>
        </div>

        <div className="Trending_Name">
            <div className="SpanBottom__Left">
                {nameBottom}
            </div>
            
            <div className="DivBottom__Right">
                <img src={imgBottom} alt="diamond black"></img>
                <div className="DivBottom__RightSpanLeft">
                    {number}
                </div>
                <div className="DivBottom__RightSpanRight">
                    {brand}
                </div>
            </div>

        </div>
    </TrendingStyled>
}

export default CardTrending;