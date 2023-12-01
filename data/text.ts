import { br } from "./common";

export const welcomeText = [
  "Welcome to $pink(term.barnabee.studio) LTS (0.8.13)",
  `
888888b.                                      888                        
888  "88b                                     888                        
888  .88P                                     888                        
8888888K.   8888b.  888d888 88888b.   8888b.  88888b.   .d88b.   .d88b.  
888  "Y88b     "88b 888P"   888 "88b     "88b 888 "88b d8P  Y8b d8P  Y8b 
888    888 .d888888 888     888  888 .d888888 888  888 88888888 88888888 
888   d88P 888  888 888     888  888 888  888 888 d88P Y8b.     Y8b.     
8888888P"  "Y888888 888     888  888 "Y888888 88888P"   "Y8888   "Y8888  
                                                                             `,
  ` * Documentation:  $url(https://github.com/vabarnabas/term)`,
  br,
  `For available commands, use the $purple('help') command`,
];

export const helpText = [
  `List of available commands:`,
  br,
  `$purple(welcome)            Dispalys the welcome message`,
  `$purple(contacts)           Shows available contacts`,
  `$purple(clear)              Clears the screen`,
  `$purple(guess) $blue(<number>)     Try to guess the number between 1 to 10`,
];

export const contactsText = [
  `List of contacts:`,
  br,
  `$icon(nf nf-fa-github) $purple(Github)            $url(https://github.com/vabarnabas)`,
  `$icon(nf nf-md-linkedin) $purple(Linkedin)          $url(https://www.linkedin.com/in/vabarnabas/)`,
];
