declare module 'check-if-word' {

  
  export = checkWord;
  
  declare function checkWord(language: checkWord.LanguageOption): LanguageObject;
  
  declare namespace checkWord {
    type LanguageOption = 'en' | 'es' | 'fr' | 'de';
  }
  
  interface LanguageObject {
    check: (x: string) => boolean;
    getValidWords: (x: string[]) => string[];
  }
}
