import Card from "./Card";

export default function RenderCard({ list, media_type }) {
  return (
    <section className="flex flex-row gap-4 sm:gap-2 w-full justify-around flex-wrap  py-8">
      {list.map((item, id) => (
        <Card key={id} item={item} media_type={media_type} id={id} />
      ))}
    </section>
  );
}
