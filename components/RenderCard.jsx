import styled from 'styled-components'


const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

const Card = styled.div`
    width: 200px;
    margin: 0 12px 0;
    &:hover{
        transition: 400ms;
        transform: scale(1.04);
    }
`
const Img = styled.img`
    border-radius: 8px;
    width: 100%;
    -webkit-box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.51); 
box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.51);
`
const Title = styled.h3`
    text-align: center;

    a{
        text-decoration: none;
        color: #c4c4c4;

        &:hover {
            transition: 300ms;
            color: greenyellow;
        }
    }
`

export default function RenderCard({ list }) {


    return (
        <CardContainer>
            {list.map((item, id) => (
                <Card key={id}>
                    {/* {console.log(item)} */}
                    <Img src={`https://image.tmdb.org/t/p/w500//${item.poster_path}`} />
                    <Title><a href={`/${item.media_type}/${item.id}`}>{item.title ? item.title: item.name}</a></Title>
                </Card>
            ))}
        </CardContainer>
    )
}