export class User {
  private name: string;
  private UID: string;
  private progress: number;
  private lessonsCompleted: {lessonId: string}[];

  constructor() {
    this.name = '';
    this.UID = '';
    this.progress = 0.0;
    this.lessonsCompleted = [];

  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setUID(UID: string) {
    this.UID = UID;
  }

  getUID() {
    return this.UID;
  }

  setProgress(progress: number) {
    this.progress = progress;
  }

  setLessonsCompleted(lessonsCompleted: {lessonId: string}[]) {
    this.lessonsCompleted = lessonsCompleted.splice(0);
  }

  getLessonsCompleted() {
    return this.lessonsCompleted;
  }


}
