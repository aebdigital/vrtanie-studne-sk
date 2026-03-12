type SeoSchemaProps = {
  schema: Record<string, unknown>;
};

export default function SeoSchema({ schema }: SeoSchemaProps) {
  return (
    <script
      type="application/ld+json"
      className="aioseo-schema"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

