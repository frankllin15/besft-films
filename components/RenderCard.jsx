import styled from 'styled-components'
import Card from './Card'

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 12px;
`

export default function RenderCard({ list, media_type }) {
  
    return (
        <CardContainer>
            {list.map((item, id) => (
                <Card key={id} item={item} media_type={media_type} id={id}/>

            ))}
        </CardContainer>
    )
}
