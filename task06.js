"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isComplete(course) {
    return course.lessons.length >= 4;
}
exports.default = isComplete;
console.log(isComplete({
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
}));
