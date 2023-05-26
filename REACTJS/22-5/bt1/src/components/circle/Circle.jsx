import styled from "styled-components";

const CircleStyled = styled.div`
    img{
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        padding: ${(props) => props.padding};
        border-radius: 50px;
        background-color: #FFFFFF;
    }

    
`

const Circle = ({url_image, width, height, padding}) => {
    return(
        <CircleStyled width={width} height={height} padding={padding}>
            <img src={url_image} alt="" />
        </CircleStyled>
    )
}

export default Circle;