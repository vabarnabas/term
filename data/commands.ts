import { contactsText, helpText, welcomeText } from "./text";

export const commands = ["welcome", "help", "clear", "guess", "contacts"];

export function commandHandler(
  command: string,
  lines: string[],
  setLines: (lines: string[]) => void
) {
  const [baseCommand, ...args] = command.split(" ");

  const returnArray = (
    customLines: string[],
    includeCommand: boolean = true
  ) => {
    const commandLine = `$pink(user@term.barnabee.studio):$blue(~)$ ${command}`;

    return setLines([
      ...lines,
      ...(includeCommand ? [commandLine] : []),
      ...customLines,
    ]);
  };

  if (!command.length) returnArray([]);

  if (commands.includes(baseCommand)) {
    switch (baseCommand) {
      case "welcome":
        return returnArray(welcomeText);
      case "help":
        return returnArray(helpText);
      case "contacts":
        return returnArray(contactsText);
      case "clear":
        return setLines([]);
      case "guess":
        console.log(args[0]);
        if (args[0] === undefined) {
          return returnArray([`Missing argument(s): <number>`]);
        }
        const number = parseInt(args[0]);
        if (number >= 1 && number <= 10) {
          const randomNumber = Math.floor(Math.random() * 10 + 1);

          return returnArray([
            randomNumber === number
              ? `You are right, the correct value is ${randomNumber}`
              : `You are wrong, the correct value is ${randomNumber}`,
          ]);
        } else {
          return returnArray([
            `Invalid argument value (${args[0]}). Argument <number> must be a number and have a value between 1 and 10`,
          ]);
        }
        break;
    }
  } else {
    return returnArray([`Command '${baseCommand}' not found`]);
  }
}
