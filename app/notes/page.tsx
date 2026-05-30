import { fetchNotes } from "../../lib/api";
import NotePage from "./Notes.client.tsx";

const Notes = async () => {
  const notes = await fetchNotes("", 1);

  return <NotePage res={notes} />;
};

export default Notes;
