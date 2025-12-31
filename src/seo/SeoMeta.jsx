export default function SeoMeta({ title, description, subtitle }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {subtitle && (
        <meta name="subtitle" content={subtitle} />
      )}
    </>
  );
}
