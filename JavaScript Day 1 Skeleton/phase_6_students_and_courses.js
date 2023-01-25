function Student(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.courses = []
}

Student.prototype.name = function() {
    return this.firstName + " " + this.lastName
}

Student.prototype.enroll = function(course) {
    if (this.courses.includes(course)) {
        this.courses.push(course)
        course.addStudent(this)
    }
}

Student.prototype.courseLoad = function() {
    
}


function Course(courseName, department, numberCredits){
    this.courseName = courseName
    this.department = department
    this.numberCredits = numberCredits
    this.students = []
}

Course.prototype.addStudent = function(student) {
    this.students.push(student)
}

