/**
 * Created by HirdayGupta on 20/01/18.
 */
export class Lesson {
  private title: string;
  private uid: string;
  private letters: string[];

  constructor() {
    this.title = '';
    this.uid = '';
    this.letters = [];
  }

  getTitle() {
    return this.title;
  }

  getUID() {
    return this.uid;
  }

  getLetters() {
    return this.letters;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setUID(uid: string) {
    this.uid = uid;
  }

  setLetters(letters: string[]) {
    this.letters = letters.splice(0);
  }

}
