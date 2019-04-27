import { getSCInfoFromOembed } from "~/service/api-calls";
import isNil from "lodash/isNil";

export async function buildSong(url = "", genre = "", id) {
  const song = await getSCInfoFromOembed(url);
  if (song) {
    const { author_name, thumbnail_url, title, description } = song;
    return {
      artist: author_name,
      cover: thumbnail_url,
      title,
      genre,
      id,
      url,
      description
    };
  } else {
    return { genre };
  }
}
