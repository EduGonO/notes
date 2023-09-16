import fs from 'fs/promises'
import path from 'path'
import parseFrontMatter from 'front-matter'
import {Note, NotePreview, NOTE_INDEX_NAME} from 'app/interfaces/note'

const notesPath = path.join(process.cwd(), 'notes')

export const getNotes = async () => {
  const dir = await fs.readdir(notesPath)

  const noteNames = dir
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace('.md', ''))

  return Promise.all(noteNames.map((name) => readNote(name)))
}


/*
const readNote = async (name: string): Promise<Note> => {
  const escapedName = path.basename(name)

  const file = await fs.readFile(path.join(notesPath, escapedName + '.md'), 'utf8')

  const {attributes, body} = parseFrontMatter<{
    title: string | undefined
    snippet: string | undefined
  }>(file.toString())

  return {
    path: name,
    title: attributes?.title || name,
    snippet: attributes?.snippet || markdownToSnippet(body),
    markdown: body,
    linkedFromNotes: [],
  }
}*/

const readNote = async (name: string): Promise<Note> => {
  const escapedName = path.basename(name);
  const file = await fs.readFile(path.join(notesPath, escapedName + '.md'), 'utf8');
  const {attributes, body} = parseFrontMatter<{ title: string | undefined; snippet: string | undefined }>(file.toString());
  
  return {
    path: name,
    title: attributes?.title || name,
    snippet: attributes?.snippet || markdownToSnippet(body, name),
    markdown: body,
    linkedFromNotes: [],
  };
};

export const getHydratedNote = async (name: string): Promise<Note | null> => {
  const allNotes = await getNotes();
  const note = allNotes.find((n) => n.path === name);
  
  if (!note) return null;

  const linkedFromNotes = allNotes
    .filter((n) => n != note && n.path != NOTE_INDEX_NAME)
    .filter((n) => n.markdown.includes(`[[${name}]]`))
    .map((note) => {
      return {
        path: note.path,
        title: note.title,
        snippet: markdownToSnippet(note.markdown, name),
      };
    });

  return {
    ...note,
    linkedFromNotes,
  };
};




const markdownToSnippet = (markdown: string, name: string): string => {
  const regex = new RegExp(`\\[\\[${name}\\]\\]`);
  const lines = markdown.split('\n');
  const matchingLines = [];

  for (let line of lines) {
    if (regex.test(line)) {
      matchingLines.push(line);
    }
  }

  if (matchingLines.length > 0) {
    return matchingLines.join('\n'); // or .join('\n') if you prefer newlines between each
  }

  // Fallback to the first two lines if no reference is found
  return markdown
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 2)
    .join(' ');
};



/* working goood first match
const markdownToSnippet = (markdown: string, name: string): string => {
  const regex = new RegExp(`\\[\\[${name}\\]\\]`);
  const paragraphs = markdown.split('\n'); // Assuming paragraphs are separated by two new lines

  for (let para of paragraphs) {
    if (regex.test(para)) {
      return para;
    }
  }
  
  return markdown
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 2)
    .join(' ');
};
*/









/* working
const markdownToSnippet = (markdown: string): string => {
  const regex = new RegExp(`[[${name}]]`);
  const paragraphs = markdown.split('\n\n');  // Assumes that paragraphs are separated by two newlines
  for (let para of paragraphs) {
    if (regex.test(para)) {
      return para;
    }
  }
  return markdown
    .replace(/^#.+/g, '')
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 2)
    .join(' ');
}*/


/*
const markdownToSnippet = (markdown: string): string => {
  return markdown
    .replace(/^#.+/g, '')
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 2)
    .join(' ')
}


const markdownToSnippet = (markdown: string, noteName: string): string => {
  const paragraphs = markdown.split(/\n\s*\n/);
  const foundParagraph = paragraphs.find((paragraph) => paragraph.includes(`[[${noteName}]]`));
  return foundParagraph ? foundParagraph : "";
}




working
const noteToNotePreview = (note: Note): NotePreview => {
  return {
    path: note.path,
    title: note.title,
    snippet: markdownToSnippet(note.markdown),
  }
}







/*
export const getHydratedNote = async (name: string): Promise<Note | null> => {
  const allNotes = await getNotes();
  const note = allNotes.find((n) => n.path === name);

  if (!note) return null;

  const linkedFromNotes = allNotes
    .filter((n) => n !== note && n.path !== NOTE_INDEX_NAME)
    .filter((n) => n.markdown.includes(`[[${name}]]`))
    .map((n) => {
      return {
        path: n.path,
        title: n.title,
        snippet: markdownToSnippet(n.markdown),
      };
    });

  return {
    ...note,
    linkedFromNotes,
  }
}

working
export const getHydratedNote = async (name: string): Promise<Note | null> => {
  const allNotes = await getNotes()
  const note = allNotes.find((n) => n.path === name)

  if (!note) return null

  const linkedFromNotes = allNotes
    .filter((n) => n != note && n.path != NOTE_INDEX_NAME)
    .filter((n) => n.markdown.includes(`[[${name}]]`))
    .map(noteToNotePreview)

  return {
    ...note,
    linkedFromNotes,
  }
}*/

export const getNote = async (name: string): Promise<Note | null> => {
  try {
    return await readNote(name)
  } catch (error) {
    console.error(error)
    return null
  }
}
