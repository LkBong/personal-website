interface PdfEmbedProps {
  src: string;
  title?: string;
  height?: string;
}

export function PdfEmbed({ src, title = "PDF Document", height = "700px" }: PdfEmbedProps) {
  return (
    <div className="not-prose my-6 flex flex-col gap-2">
      <div className="w-full rounded-xl overflow-hidden border border-border ring-2 ring-muted">
        <iframe
          src={src}
          title={title}
          width="100%"
          style={{ height }}
          className="block"
        />
      </div>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground hover:text-foreground transition-colors self-end"
      >
        Open PDF in new tab
      </a>
    </div>
  );
}
