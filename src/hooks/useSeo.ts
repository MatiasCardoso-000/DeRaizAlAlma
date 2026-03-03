import { useEffect } from "react";

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | De Raíz al Alma`;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}
