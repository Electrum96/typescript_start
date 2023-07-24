 export default function isComplete(course: {name: string, lessons: string[]}): boolean{
    return course.lessons.length >= 4
}
 console.log(isComplete({
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
  }));
 