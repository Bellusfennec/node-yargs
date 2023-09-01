const yargs = require("yargs");
const pkg = require("./package.json");
const {
  addNote,
  printNote,
  removeNote,
  updateNote,
} = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: { type: "string", describe: "Note title", demandOption: true },
  },
  handler({ title }) {
    addNote(title);
    console.log("Add command", title);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: { type: "string", describe: "Note id", demandOption: true },
  },
  handler({ id }) {
    removeNote(id);
  },
});

yargs.command({
  command: "edit",
  describe: "Edit note by id",
  builder: {
    id: { type: "string", describe: "Note title by id", demandOption: true },
  },
  handler({ id, title }) {
    updateNote({ id, title });
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNote();
  },
});

yargs.parse();
