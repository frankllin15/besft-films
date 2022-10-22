
import Card from './Card'



export default function RenderCard({ list, media_type }) {

    
    // console.log('Render')

    return (
        <section className="flex flex-row w-full justify-around flex-wrap p-3">
            {list.map((item, id) => (
                <Card key={id} item={item} media_type={media_type} id={id}/>

            ))}
        </section>
    )
}

