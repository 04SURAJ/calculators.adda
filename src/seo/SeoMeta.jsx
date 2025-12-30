
export default function SeoMeta({ title, description }) {
  return (
    <div>
      <title>{title}</title>
      <meta name="description" content={description} />
   </div>
  );
}
